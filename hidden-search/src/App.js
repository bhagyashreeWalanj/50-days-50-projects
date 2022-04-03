import './App.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';



function App() {
  const [toggleInputByCSS, setToggleInputByCSS] = useState(false);
  const [toggleInputByTailwind, setToggleInputByTailwind] = useState(false);


  const handleToggleByCSS = () => {
    setToggleInputByCSS(!toggleInputByCSS);
  }

  const handleToggleByTailwind = () => {
    setToggleInputByTailwind(!toggleInputByTailwind);
  }

  return (
    <>
      <section>
        <h1 className="text-lg text-slate-300"> CSS </h1>
        <div className={`search ${toggleInputByCSS ? 'active focus:outline-none' : ''}`}>
          <input type="text" className={`textinput border-y-2`} placeholder="  Search..." />
          <button className="btn" onClick={handleToggleByCSS}>
            <FaSearch className="m-[0.8rem]" />
          </button>
        </div>
      </section>

      <section className="mt-4">
        <h1 className="text-lg text-slate-300"> Tailwind CSS</h1>
        <div className="flex flex-row items-center justify-center">
          <input className={`${(!toggleInputByTailwind) ? 'w-0 ease-in duration-100' : 'w-60 ease-out duration-200'}  h-10 rounded-l-md`} type="text" name="search" id="searchid" placeholder="   Search..."

          />
          <button type="submit" className="flex flex-col transform duration-75 ease-linear bg-white w-7 h-10 rounded-r-md justify-center align-middlex mr-12"
            onClick={handleToggleByTailwind}>
            <FaSearch className="w-4 h-4 m-1" />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
