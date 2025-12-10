


const Page2 = ({ plan, setPlan, billingType, setBillingType, next, back }) => {
  const plans = [
    {
      name: "Arcade",
      monthly: 9,
      yearly: 90,
      img: "/assets/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      monthly: 12,
      yearly: 120,
      img: "/assets/images/icon-advanced.svg",
    },
    {
      name: "Pro",
      monthly: 15,
      yearly: 150,
      img: "/assets/images/icon-pro.svg",
    },
  ];

  return (
    <div className="select-plan">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="plans">
        {plans.map((p) => (
          <div
            className={plan.name === p.name ? "plan-card active" : "plan-card"}
            onClick={() => setPlan(p)}
            key={p.name}
          >
            <img src={p.img} alt="" />
            <h3>{p.name}</h3>

            {billingType === "monthly" ? (
              <span>${p.monthly}/mo</span>
            ) : (
              <span>${p.yearly}/yr</span>
            )}
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="billing-toggle">
        <p className={billingType === "monthly" ? "active-type" : ""}>
          Monthly
        </p>

        <label className="switch">
          <input
            type="checkbox"
            checked={billingType === "yearly"}
            onChange={() =>
              setBillingType(billingType === "monthly" ? "yearly" : "monthly")
            }
          />
          <span className="slider"></span>
        </label>

        <p className={billingType === "yearly" ? "active-type" : ""}>Yearly</p>
      </div>

      <div className="buttons">
        <button className="back-btn" onClick={back}>
          Go Back
        </button>
        <button className="next-btn" onClick={next}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Page2;
