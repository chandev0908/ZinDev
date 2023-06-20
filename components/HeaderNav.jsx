"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    setIsFocused(!isFocused);
  };
  return (
    <div className="header-nav h-screen w-screen absolute overflow-hidden">
      <div
        className={`nav absolute w-screen h-screen bg-[#131516] grid text-white gap-y-7 place-content-center place-items-center opacity-90 z-40 transition-all duration-500 ${
          !isFocused ? "translate-x-full" : ""
        } overflow-hidden md:hidden`}
      >
        <Link
          className="w-fit transition duration-300 hover:text-primary-hover z-30 text-center"
          href={"#projects"}
        >
          PROJECTS
        </Link>
        <Link
          className="w-fit transition duration-300 hover:text-primary-hover z-30 text-center"
          href={"#contact"}
        >
          CONTACT
        </Link>
        <button className="relative border-2 border-black p-2 rounded-md overflow-hidden group my-2 overflow-hidden w-fit z-30">
          <h1 className="z-20 relative group-hover:text-[#F5F5F5] font-semibold transition-all duration-[1200ms]">
            VIEW CV
          </h1>
          <span className="absolute origin-left transition-all duration-[1000ms] border-x-2 border-black -left-14 -top-28 bg-primary-hover w-0 h-[22rem] group-hover:w-full group-hover:rotate-45"></span>
        </button>
      </div>

      <div className="w-fit absolute right-0 p-4 md:hidden z-50">
        <div>
          <button
            className={`relative ${isFocused ? "focused" : ""}`}
            onClick={handleButtonClick}
          >
            <div
              className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary-text ring-0 ring-gray-300 hover:ring-8 ${
                isFocused ? "ring-4" : ""
              } ring-opacity-30 duration-200 shadow-md`}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isFocused ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isFocused ? "translate-x-10 delay-75" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isFocused ? "translate-x-10 delay-150" : ""
                  }`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                    isFocused
                      ? "-translate-x-10 translate-x-0 flex w-12"
                      : "translate-x-0"
                  }`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isFocused ? "rotate-45 delay-300" : "rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isFocused ? "-rotate-45 delay-300" : "-rotate-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="hidden md:grid w-full grid-flow-col w-fit justify-end content-center items-center p-6 gap-x-12 text-xl">
        <Link
          className="w-fit transition duration-300 hover:text-primary-hover z-30"
          href={"#projects"}
        >
          PROJECTS
        </Link>
        <Link
          className="w-fit transition duration-300 hover:text-primary-hover z-30"
          href={"#contact"}
        >
          CONTACT
        </Link>
        <button className="relative border-2 border-black p-2 rounded-md overflow-hidden group my-2 overflow-hidden w-fit z-30">
          <h1 className="z-20 relative group-hover:text-[#F5F5F5] font-semibold transition-all duration-[1200ms]">
            VIEW CV
          </h1>
          <span className="absolute origin-left transition-all duration-[1000ms] border-x-2 border-black -left-14 -top-28 bg-primary-hover w-0 h-[22rem] group-hover:w-full group-hover:rotate-45"></span>
        </button>
      </div>
    </div>
  );
}
