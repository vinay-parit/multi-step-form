


import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [step, setStep] = useState(1);

  // Global Form State
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [billingType, setBillingType] = useState("monthly"); // monthly | yearly

  const [plan, setPlan] = useState({
    name: "Arcade",
    monthly: 9,
    yearly: 90,
  });

  const [addons, setAddons] = useState([
    { id: 1, name: "Online service", priceMo: 1, priceYr: 10, selected: false },
    { id: 2, name: "Larger storage", priceMo: 2, priceYr: 20, selected: false },
    {
      id: 3,
      name: "Customizable profile",
      priceMo: 2,
      priceYr: 20,
      selected: false,
    },
  ]);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const toggleAddon = (id) => {
    setAddons((prev) =>
      prev.map((a) => (a.id === id ? { ...a, selected: !a.selected } : a))
    );
  };

  return (
    <div className="body">
      <div className="main">
        <div className="page-1">
          <Sidebar step={step} />

          <div className="content">
            {step === 1 && (
              <Page1
                personal={personal}
                setPersonal={setPersonal}
                next={next}
              />
            )}

            {step === 2 && (
              <Page2
                plan={plan}
                setPlan={setPlan}
                billingType={billingType}
                setBillingType={setBillingType}
                next={next}
                back={back}
              />
            )}

            {step === 3 && (
              <Page3
                addons={addons}
                toggleAddon={toggleAddon}
                billingType={billingType}
                next={next}
                back={back}
              />
            )}

            {step === 4 && (
              <Page4
                plan={plan}
                addons={addons}
                billingType={billingType}
                next={next}
                back={back}
              />
            )}

            {step === 5 && <ThankYou />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
