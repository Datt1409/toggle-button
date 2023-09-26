import React, { useState } from "react";

export default function ToggleButtons({ theme, label = "left" }) {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  const handleShowHide = () => {
    if (hide) {
      setHide(!hide);
      setShow(!show);
    } else {
      setHide(!hide);
      setShow(!show);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Basic */}
      {theme === "basic" && (
        <div
          className={`${
            label === "left" ? "flex-row" : "flex-row-reverse"
          } flex items-center gap-10`}
        >
          {label === "left" ? (
            <div
              className=" cursor-pointert onClick={() => handleShowHide()}ext-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the left
            </div>
          ) : (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the right
            </div>
          )}
          <div
            className={`${
              hide ? "switch_body_basic_off" : "switch_body_basic_on"
            } w-[200px] h-[90px] rounded-full flex items-center px-2 cursor-pointer`}
            onClick={() => handleShowHide()}
          >
            <div
              className={`${
                hide ? "w-0 duration-500" : "w-52  translate-x-28 duration-500"
              } relative flex items-center`}
            >
              <div className="bg-white shadow-md w-[70px] h-[70px] rounded-full absolute left-0"></div>
            </div>
          </div>
        </div>
      )}

      {/* Orange */}
      {theme === "orange" && (
        <div
          className={`${
            label === "left" ? "flex-row" : "flex-row-reverse"
          } flex items-center gap-10`}
        >
          {label === "left" ? (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the left
            </div>
          ) : (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the right
            </div>
          )}
          <div
            className={`${
              hide ? "switch_body_orange_off" : "switch_body_orange_on"
            } w-[200px] h-[90px] rounded-full flex items-center px-2 cursor-pointer`}
            onClick={() => handleShowHide()}
          >
            <div
              className={`${
                hide ? "w-0 duration-500" : "w-52  translate-x-28 duration-500"
              } relative flex items-center`}
            >
              <div
                className={`${
                  hide ? "switch_button_orange_off" : "switch_button_orange_on"
                }  w-[70px] h-[70px] rounded-full absolute left-0`}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Forest */}
      {theme === "forest" && (
        <div
          className={`${
            label === "left" ? "flex-row" : "flex-row-reverse"
          } flex items-center gap-10`}
        >
          {label === "left" ? (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the left
            </div>
          ) : (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the right
            </div>
          )}

          <div
            className={`${
              hide ? "switch_body_night_forest" : "switch_body_day_forest"
            } w-[200px] h-[90px] rounded-full flex items-center px-2 cursor-pointer`}
            onClick={() => handleShowHide()}
          >
            <div
              className={`${
                hide ? "w-0 duration-500" : "w-52  translate-x-28 duration-500"
              } relative flex items-center`}
            >
              <div
                className={`${
                  hide ? "transform transition-all" : "transform transition-all"
                } bg-white w-[70px] h-[70px] rounded-full absolute left-0`}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Night/ Day */}
      {theme === "daytime" && (
        <div
          className={`${
            label === "left" ? "flex-row" : "flex-row-reverse"
          } flex items-center gap-10`}
        >
          {label === "left" ? (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the left
            </div>
          ) : (
            <div
              className="text-black font-bold text-2xl cursor-pointer"
              onClick={() => handleShowHide()}
            >
              On the right
            </div>
          )}
          <div
            className={`${
              hide ? "switch_body_night" : "switch_body_day"
            } w-[200px] h-[90px] rounded-full flex items-center px-2 cursor-pointer`}
            onClick={() => handleShowHide()}
          >
            <div
              className={`${
                hide ? "w-0 duration-500" : "w-52  translate-x-28 duration-500"
              } relative flex items-center`}
            >
              <div
                className={`${
                  hide ? "switch_button_night" : "switch_button_day"
                } bg-white w-[70px] h-[70px] rounded-full absolute left-0`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
