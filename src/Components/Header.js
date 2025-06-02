import React, { useEffect, useState } from "react";
import {
  Hamburger_Menu_Icon,
  Hamburger_Menu_Icon_Dark_Mode,
  USER_ICON,
  Youtube_Logo,
  Youtube_Logo_Dark_Mode,
  YOUTUBE_SUGGESTIONS_API,
} from "../Utils/constants";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleMenu } from "../Utils/appSlice";
import { cacheResults } from "../Utils/searchSuggestionSlice";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const darkMode = useSelector(store=>store.app.darkMode);

  const getSearchSuggestion = async () => {
    // console.log("API Call - ", searchQuery);

    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // const arr= JSON.parse(json)
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleSugClick = (sug) => {
    setSearchQuery(sug);
  };

  useEffect(() => {
    const DebounceTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    // getSearchSuggestion();
    return () => {
      clearTimeout(DebounceTimer);
    };
  }, [searchQuery]);

  const onHamMenuClick = () => {
    dispatch(toggleMenu());
  };

  const search=()=>{
    window.location.href="/search/"+searchQuery;
  }

  return (
    <div>
      <div className={`${darkMode?"bg-black text-white":"bg-white text-black"} flex justify-between py-4 shadow-md fixed w-full z-20`}>
        <div className="flex w-3/12">
          <img
            onClick={onHamMenuClick}
            className="h-8 mx-4 cursor-pointer"
            src={darkMode? Hamburger_Menu_Icon_Dark_Mode
 :Hamburger_Menu_Icon}
            alt="HamburgerMenu"
          />
          <a href="/">
            <img className={darkMode?"h-8 scale-150": "h-6 m-1"} src={darkMode? Youtube_Logo_Dark_Mode :Youtube_Logo} alt="Youtube Logo" />
          </a>
        </div>
        <div className=" w-1/2">
          <div>
            <input
              className={` ${darkMode?"bg-black":"bg-white"} border border-gray-400 w-4/5 p-2 pt-[9px] rounded-l-full text-center `}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              // onBlur={() => setShowSuggestion(false)}
            /> 
            {searchQuery && <button onClick={()=>setSearchQuery("")} className="fixed top-6 -ml-10 hover:bg-slate-400 px-2 rounded-xl">X</button>}

            <button onClick={search} className={`${darkMode?"bg-gray-700 hover:bg-gray-500":"bg-gray-200 hover:bg-gray-400"} border border-gray-400 w-1/12 p-2 pb-[13px] rounded-r-full `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 -mb-1 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <img  src={darkMode?"https://cdn.vectorstock.com/i/1000v/33/08/light-mode-dark-glyph-ui-icon-vector-43353308.jpg" : "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png"} onClick={()=>{dispatch(toggleDarkMode())}} alt="theme" className="w-10 cursor-pointer"/>          
        </div>

        <div className="w-2/12 flex items-center justify-center">
          <span>Developed By:</span> 
          {/* <a href="https://github.com/AbhilashAcharyaS" target="_blank"><img className="h-10 rounded-full hover:scale-125 cursor-pointer mx-2" src="https://avatars.githubusercontent.com/u/49024964?v=4" alt="userIcon" /> </a> */}
          <a href="https://www.linkedin.com/in/abhilash-acharya-56ab61191/" target="_blank"><img className="h-10 rounded-full hover:scale-125 cursor-pointer mx-2" src="https://avatars.githubusercontent.com/u/49024964?v=4" alt="userIcon" /> </a>
        </div>
      </div>

      {showSuggestion && suggestions.length > 0 && (
        <div className={`${darkMode?"bg-black text-white":"bg-white"} w-[30rem] z-20 mx-auto fixed right-0 left-0 px-2 py-2 mt-[74px] rounded-xl border-2 border-blue-400 shadow-xl`}>
          <ul className="">
            {suggestions.map((sug) => (
              <div key={sug}>
                {" "}
                <li
                  onClick={() => {
                    setSearchQuery(sug);
                    setShowSuggestion(false);
                  }}
                  className={`${darkMode?"hover:bg-gray-800":"hover:bg-gray-100"} py-1 px-4 my-1 cursor-pointer `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 mr-2 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>{" "}
                  {sug}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
