import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentActive, setCurrentActive] = useState(1);
  const [width, setwidth] = useState(0);

  const handleNextButton = () => {
    setCurrentActive(currentActive + 1);
    setwidth(width + 100);
  }

  const handlePrevButton = () => {
    setCurrentActive(currentActive - 1);
    setwidth(width - 100);
  }

  return (

    <div className="text-center">
      <div className="before:content-[''] before:top-[40%] before:left-0 before:h-1 before:w-full before:translate-y-2/4 before:z-[-1] before:absolute  before:bg-gray-300 flex justify-between relative mb-9 max-w-full w-80 ">
        <div className={`bg-blue-300 absolute top-[40%] left-0 h-1  translate-y-2/4 z-[-1] duration-300 ease-out`}
          style={{ 'width': `${width}px` }}
          id="progress"></div>
        <div className={`circle ${(currentActive >= 1) ? 'active' : ''}`}>1</div>
        <div className={`circle ${(currentActive >= 2) ? 'active' : ''}`}>2</div>
        <div className={`circle ${(currentActive >= 3) ? 'active' : ''}`}>3</div>
        <div className={`circle ${(currentActive >= 4) ? 'active' : ''}`}>4</div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400"
        type="button" id="prev" disabled={(currentActive === 1) ? 'disabled' : ''} onClick={handlePrevButton}>Prev</button>

      <button className="ml-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400"
        id="next" onClick={handleNextButton} disabled={(currentActive === 4) ? 'disable' : ''} >Next</button>

    </div>
  );
}

export default App;
