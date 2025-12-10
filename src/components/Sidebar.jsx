import React from 'react'

const Sidebar = ({num, setNum}) => {
  return (
    <div className="sidebar">
      <div className="steps">
        <div className="first">
          <div className="circle">
            <p>{num} {setNum}</p>
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
  );
}

export default Sidebar