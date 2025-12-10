// import React from 'react'

// const Page1 = () => {
//   return (
//     <div className="personal-info">
//       <h2>Persnoal info </h2>
//       <p>Please provide your name, email address, and phone number. </p>

//       <form>
//         <label>Name</label>
//         <input type="text" placeholder="e.g. Stephen King" required />

//         <label>Email Address</label>
//         <input type="email" placeholder="e.g. stephenking@lorem.com" required />

//         <label>Phone Number</label>
//         <input type="tel" placeholder="e.g. +1 234 567 890" required />
//       </form>
//       <div className="submit-btn">
//         <button type="submit">Next Step</button>
//       </div>
//     </div>
//   );
// }

// export default Page1



// const Page1 = ({ next }) => {
//   return (
//     <div className="personal-info">
//       <h2>Personal info</h2>
//       <p>Please provide your name, email and phone.</p>

//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>Name</label>
//         <input type="text" placeholder="e.g. Stephen King" required />

//         <label>Email Address</label>
//         <input type="email" placeholder="e.g. stephenking@lorem.com" required />

//         <label>Phone Number</label>
//         <input type="tel" placeholder="e.g. +1 234 567 890" required />
//       </form>

//       <div className="submit-btn">
//         <button onClick={next}>Next Step</button>
//       </div>
//     </div>
//   );
// };

// export default Page1;



// const Page1 = ({ personal, setPersonal, next }) => {
//   const handleChange = (e) => {
//     setPersonal({ ...personal, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="personal-info">
//       <h2>Personal info</h2>
//       <p>Please provide your name, email address, and phone number.</p>

//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={personal.name}
//           onChange={handleChange}
//           required
//           placeholder="e.g. Stephen King"
//         />

//         <label>Email Address</label>
//         <input
//           type="email"
//           name="email"
//           value={personal.email}
//           onChange={handleChange}
//           required
//           placeholder="e.g. stephenking@lorem.com"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phone"
//           value={personal.phone}
//           onChange={handleChange}
//           required
//           placeholder="e.g. +1 234 567 890"
//         />
//       </form>

//       <div className="submit-btn">
//         <button onClick={next}>Next Step</button>
//       </div>
//     </div>
//   );
// };

// export default Page1;


import React, { useState } from "react";

const Page1 = ({ personal, setPersonal, next }) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "This field is required";
    return "";
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "This field is required";
    if (!regex.test(email)) return "Invalid email address";
    return "";
  };

  const validatePhone = (phone) => {
    const regex = /^\+?[0-9\s\-]{7,15}$/; // allows +, numbers, spaces, -
    if (!phone.trim()) return "This field is required";
    if (!regex.test(phone)) return "Invalid phone number";
    return "";
  };

  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });

    // Validate live
    let error = "";
    if (e.target.name === "name") error = validateName(e.target.value);
    if (e.target.name === "email") error = validateEmail(e.target.value);
    if (e.target.name === "phone") error = validatePhone(e.target.value);

    setErrors({ ...errors, [e.target.name]: error });
  };

  const handleNext = () => {
    // Run validation on all fields
    const nameError = validateName(personal.name);
    const emailError = validateEmail(personal.email);
    const phoneError = validatePhone(personal.phone);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
    });

    // Prevent next if any error
    if (nameError || emailError || phoneError) return;

    // If all valid, go to next page
    next();
  };

  return (
    <div className="personal-info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={personal.name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={personal.email}
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-msg">{errors.email}</p>}

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={personal.phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <p className="error-msg">{errors.phone}</p>}
      </form>

      <div className="submit-btn">
        <button onClick={handleNext}>Next Step</button>
      </div>
    </div>
  );
};

export default Page1;
