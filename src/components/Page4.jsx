


const Page4 = ({ plan, addons, billingType, next, back }) => {
  const planPrice = billingType === "monthly" ? plan.monthly : plan.yearly;

  const addonsTotal = addons
    .filter((a) => a.selected)
    .reduce(
      (sum, a) => sum + (billingType === "monthly" ? a.priceMo : a.priceYr),
      0
    );

  const total = planPrice + addonsTotal;

  return (
    <div className="finishing">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="final">
        <div className="final-arc">
          <div>
            <h3>
              {plan.name} ({billingType})
            </h3>
            <button className="change-btn" onClick={back}>
              Change
            </button>
          </div>

          <p>
            ${planPrice}/{billingType === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <hr />

        {addons
          .filter((a) => a.selected)
          .map((a) => (
            <div className="on-service" key={a.id}>
              <h4>{a.name}</h4>
              <p>
                +$
                {billingType === "monthly" ? a.priceMo : a.priceYr}/
                {billingType === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}

        <div className="total">
          <h4>Total</h4>
          <p className="total-price">
            +${total}/{billingType === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>

      <div className="buttons">
        <button className="back-btn" onClick={back}>
          Go Back
        </button>
        <button className="next-btn" onClick={next}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Page4;
