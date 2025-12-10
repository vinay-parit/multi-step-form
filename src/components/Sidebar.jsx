


import React from "react";

const Sidebar = ({ step }) => {
  return (
    <div className="sidebar">
      <div className="steps">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="step">
            <div
              className="circle"
              style={{
                backgroundColor: step === num ? "white" : "transparent",
                color: step === num ? "black" : "white",
                border: "1px solid white",
              }}
            >
              {num}
            </div>

            <div className="text">
              <p>STEP {num}</p>
              <h3>
                {num === 1 && "YOUR INFO"}
                {num === 2 && "SELECT PLAN"}
                {num === 3 && "ADD-ONS"}
                {num === 4 && "SUMMARY"}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
