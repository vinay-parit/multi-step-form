import React from 'react'

const Page2 = () => {
  return (
    <div className="select-plan">
      <h2>Select your plan </h2>
      <p>You have the option of monthly or yearly billing. </p>

      <div className="plans">
        <div className="arcade">
          <img src="./public/assets/images/icon-arcade.svg" alt="" />

          <h3>Arcade</h3>
          <span>$9/mo</span>
        </div>

        <div className="advanced">
          <img src="./public/assets/images/icon-advanced.svg" alt="" />

          <h3>Advanced</h3>
          <span>$12/mo</span>
        </div>

        <div className="pro">
          <img src="./public/assets/images/icon-pro.svg" alt="" />

          <h3>Pro</h3>
          <span>$15/mo</span>
        </div>
      </div>

      <div className="toggle-btn"></div>

      <div class="buttons">
        <button class="back-btn">Go Back</button>
        <button class="next-btn" type="submit">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Page2