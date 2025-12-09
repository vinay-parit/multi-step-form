import React from 'react'

const App = () => {
  return (
    <div className="body">
      <div className="main">
        <div className="step1">
          <div className="page-1">
            <div className="sidebar">
              <div className="steps">
                <div className="first">
                  <div className="circle">
                    <p>1</p>
                  </div>
                  <div className="text">
                    <p>STEP 1</p>
                    <h3>YOUR INFO</h3>
                  </div>
                </div>

                <div className="second">
                  <div className="circle">
                    <p>2</p>
                  </div>
                  <div className="text">
                    <p>STEP 2</p>
                    <h3>YOUR INFO</h3>
                  </div>
                </div>

                <div className="third">
                  <div className="circle">
                    <p>3</p>
                  </div>
                  <div className="text">
                    <p>STEP 3</p>
                    <h3>YOUR INFO</h3>
                  </div>
                </div>

                <div className="four">
                  <div className="circle">
                    <p>4</p>
                  </div>
                  <div className="text">
                    <p>STEP 4</p>
                    <h3>YOUR INFO</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-info">
              <h2>Persnoal info </h2>
              <p>Please provide your name, email address, and phone number. </p>

              <form>
                <label>Name</label>
                <input type="text" placeholder="e.g. Stephen King" required />

                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  required
                />

                <label>Phone Number</label>
                <input type="tel" placeholder="e.g. +1 234 567 890" required />
              </form>
              <div className="next-btn">
                <button type="submit">Next Step</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App