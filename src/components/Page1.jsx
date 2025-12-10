import React from 'react'

const Page1 = () => {
  return (
    <div className="personal-info">
      <h2>Persnoal info </h2>
      <p>Please provide your name, email address, and phone number. </p>

      <form>
        <label>Name</label>
        <input type="text" placeholder="e.g. Stephen King" required />

        <label>Email Address</label>
        <input type="email" placeholder="e.g. stephenking@lorem.com" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="e.g. +1 234 567 890" required />
      </form>
      <div className="submit-btn">
        <button type="submit">Next Step</button>
      </div>
    </div>
  );
}

export default Page1