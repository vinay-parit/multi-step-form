


const Page3 = ({ addons, toggleAddon, billingType, next, back }) => {
  return (
    <div className="Pick-add">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="plans-pg3">
        {addons.map((item) => (
          <div
            className={item.selected ? "addon selected" : "addon"}
            key={item.id}
            onClick={() => toggleAddon(item.id)}
          >
            <div className="left">
              <input type="checkbox" checked={item.selected} readOnly />
              <div className="info">
                <h3>{item.name}</h3>
                <p>Enhances your gaming</p>
              </div>
            </div>

            <span>
              +$
              {billingType === "monthly" ? item.priceMo : item.priceYr}/
              {billingType === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>

      <div className="buttons-3">
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

export default Page3;
