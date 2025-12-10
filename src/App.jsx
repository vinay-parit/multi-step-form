import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from "./components/Page4";
import NotFound from "./components/NotFound";

const App = () => {
  const [num, setNum] = useState(1)
  return (
    <div className="body">
      <div className="main">
        <div className="step1">
          <div className="page-1">
            <Sidebar num={num} setNum={setNum} />


            <div>
              <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App