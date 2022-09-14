import React from "react";
import { useState } from "react";
import logo from "../Assets/logo1.png";
import ellipse from "../Assets/ellipse.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import one from "../Assets/one.png";
import two from "../Assets/two.png";
import three from "../Assets/three.png";
import line from "../Assets/line.png";
import filter from "../Assets/filter.png";
import add from "../Assets/add.png";
import add1 from "../Assets/add1.png";
import add2 from "../Assets/add2.png";
import add3 from "../Assets/add3.png";
import add4 from "../Assets/add4.png";
import add5 from "../Assets/add5.png";
import { Link } from "react-router-dom"


const OverView = () => {
  const [show, setShow] = useState(false);
  const hideBar = () => {
    setShow(!show);
  };
  const [activeNav, setActiveNav] = useState("/");

  return (
    <>
      <div className="flex w-full place-items-center mx-auto font-pop relative ">
        <div class="flex w-full justify-between mx-auto xs:flex-col xs:h-screen ">
          <div className="w-[25%]">
            {/* Desktop side bar */}
            <div class=" h-[1300px] md:h-[2000px] flex flex-col text-white items-center bg-tee-200 xs:hidden md:flex p-4">
              <img
                src={logo}
                alt="logo"
                className="w-[10rem] px-2 h-12 object-contain "
              />
              <div>
                <ul className=" space-x-10 pt-10">
                 {/* <a href="#home" onClick={()=>{setActiveNav("#home")}} className={activeNav === '#home' ? "active" : ""}><RiHomeHeartLine /></a> */}

                  <Link to={"/"} onClick={()=>{setActiveNav('/')}} className={activeNav === "/" ? 'bg-white text-tee-200 w-[300px] py-8' : ''}>Over View</Link> <br />
                  <Link to={"/MyAccount"}>My Account</Link> <br />
                  <Link to={"/MyDesign"}>My Design</Link>
                </ul>
              </div>
            </div>

            {/* Mobile SibeBar */}
            <div
              className="xs:flex hidden  rounded-md mt-[2rem]"
              onClick={hideBar}
            >
              <div className="text-white z-50 w-[19rem] pt-2 h-12 ">
                {show ? (
                  <HiMenuAlt1 className="z-20 text-tee-200 text-lg text-[1rem] w-[4rem] h-10 pl-5 static " />
                ) : (
                  <HiMenuAlt1 className="z-20 text-white text-[2rem]  right-[7rem] xd:left-2 fixed " />
                )}
              </div>
              <div
                className={
                  !show
                    ? "flex  bg-tee-200 h-[1450px] fixed w-80 pt-10 pr-28 pl-20 text-white rounded-r-3xl"
                    : "hidden"
                }
              >
                <ul>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col font-pop capitalize">
            <div className="flex xs:justify-center xs:items-center xs:text-center mx-5 mt-5 xs:mt-[2rem]   xs:pr-0 xs:mx-0 ">
              <div>
                <p className="text-[24px] xs:text-[20px]  font-medium text-tee-400 xs:font-bold xs:hidden">
                  Welcome! Blessing Asukwo
                </p>
                <p className="text-[16px] xs:text-[20px] pr-[2rem] font-semi text-tee-400  hidden xs:flex -mt-[4rem]">
                  Support
                </p>
                <p className="text-[16px] text-tee-500 xs:text-[12px] font-light xs:hidden">
                  what would you like us to help you with?{" "}
                </p>
              </div>
            </div>

            <div className=" ml-5 mr-24 mt-16 flex justify-around items-center ">
              <div className="flex w-full justify-between items-center relative">
                <div className="flex items-center gap-1">
                  <img src={one} alt="" className="w-[32px] top-6" />
                  <p className="">Choose a template</p>
                </div>
                <img
                  src={line}
                  alt=""
                  className="h-2  flex justify-center items-center"
                />
                <div className="flex items-center gap-1">
                  <img src={two} alt="" className="w-[32px]" />
                  <p>Modify design</p>
                </div>
                <img
                  src={line}
                  alt=""
                  className="h-2  flex justify-center items-center"
                />
                <div className="flex items-center gap-1">
                  <img src={three} alt="" className="w-[32px] " />
                  <p>Modify design</p>
                </div>
              </div>
            </div>

            <div className="ml-5 mr-24 mt-10 ">
              <div className="flex flex-row">
                <img src={filter} alt="" className="h-5" />
                <select name="" id="">
                  <option value="">Filter All</option>
                  <option value="">Abstract</option>
                  <option value="">Fashion Design</option>
                  <option value="">Business</option>
                  <option value="">Creative</option>
                  <option value="">Health</option>
                  <option value="">Material</option>
                  <option value="">Services</option>
                  <option value="">Education</option>
                  <option value="">Weekend/--</option>
                </select>
              </div>
              <div className="flex flex-row">
                <img src={add} alt="" />
                <div className="grid grid-cols-3 xs:grid-cols-1 ">
                  <img src={add1} alt="" className="w-full" />
                  <img src={add2} alt="" className="w-[250px]" />
                  <img src={add3} alt="" className="w-[250px]" />
                  <img src={add4} alt="" className="w-[250px]" />
                  <img src={add5} alt="" className="w-[250px]" />
                  <img src={add1} alt="" className="w-[250px]" />
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute right-[5rem] top-8 xs:right-5 xs:top-[2rem] xd:absolute xd:left-[16.8rem] w-[5rem] flex justify-center ">
            <img
              src={ellipse}
              alt="image"
              className="w-12  h-12 xs:w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;

