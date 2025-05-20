import React, { useEffect, useState } from "react";
import {
  Hamburger_Menu_Icon,
  USER_ICON,
  Youtube_Logo,
  YOUTUBE_SEARCH_API,
} from "../Utils/constants";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestion = async () => {
    console.log("API Call - ", searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
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
    
  }

  return (
    <div>
      <div className="flex justify-between py-4 shadow-md fixed w-full z-20 bg-white">
        <div className="flex w-3/12">
          <img
            onClick={onHamMenuClick}
            className="h-8 mx-4 cursor-pointer"
            src={Hamburger_Menu_Icon}
            alt="HamburgerMenu"
          />
          <a href="/">
            <img className="h-6 m-1" src={Youtube_Logo} alt="Youtube Logo" />
          </a>
        </div>
        <div className=" w-6/12">
          <div>
            <input
              className="border border-gray-400 w-4/5 p-2 pt-[9px] rounded-l-full text-center"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              // onBlur={() => setShowSuggestion(false)}
            />
            <button onClick={search} className="border border-gray-400 w-1/12 p-2 pb-[13px] rounded-r-full bg-gray-200">
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

        <div className="w-2/12">
          <img className="h-10" src={USER_ICON} alt="userIcon" />
        </div>
      </div>

      {showSuggestion && suggestions.length > 0 && (
        <div className="w-[30rem] z-20 mx-auto fixed right-0 left-0 bg-white px-2 py-2 mt-[74px] rounded-xl border-2 border-blue-400 shadow-xl">
          <ul className="">
            {suggestions.map((sug) => (
              <div key={sug}>
                {" "}
                <li
                  onClick={() => {
                    setSearchQuery(sug);
                    setShowSuggestion(false);
                  }}
                  className="py-1 px-4 my-1 hover:bg-gray-100 cursor-pointer "
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
