/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react';
import { useState } from "react";
import control from "../../../../src/assets/control.png";
import logo from "../../../../src/assets/logo.png";
import Dashboard from "../../../../src/assets/Chart_fill.png";
import inbox from "../../../../src/assets/Chat.png";
import Accounts from "../../../../src/assets/User.png";
import Schedule from "../../../../src/assets/Calendar.png";
import Search from "../../../../src/assets/Search.png";
import Chart from "../../../../src/assets/Chart.png";
import Files from "../../../../src/assets/Folder.png";
import Setting from "../../../../src/assets/Setting.png";
import { Link, Outlet } from 'react-router-dom';
const SideBar = () => {


  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: Dashboard },
    { title: "Inbox", src: inbox },
    { title: "Accounts", src: Accounts, gap: true },
    { title: "Schedule ", src: Schedule },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Files, gap: true },
    { title: "Setting", src: Setting },
  ];
  return (
    // <div className="flex">
    //   <div className=" top-0 z-10 ">
    //     <div
    //       className={` ${
    //         open ? "w-72" : "w-20 "
    //       } bg-dark-purple h-screen p-5  pt-8 relative duration-300 `}
    //     >
    //       <img
    //         src={control}
    //         className={`absolute cursor-pointer -right-3 z-50 top-9 w-7 border-dark-purple
    //        border-2 rounded-full  ${!open && "rotate-180"}`}
    //         onClick={() => setOpen(!open)}
    //       />
    //       <div className="flex gap-x-4 items-center">
    //         <img
    //           src={logo}
    //           className={`cursor-pointer duration-500 ${
    //             open && "rotate-[360deg]"
    //           }`}
    //         />
    //         <h1
    //           className={`text-white origin-left font-medium text-xl duration-200 ${
    //             !open && "scale-0"
    //           }`}
    //         >
    //           E-KYC Verification
    //         </h1>
    //       </div>
    //       <ul className="pt-6">
    //         {Menus.map((Menu, index) => (
    //           <li
    //             key={index}
    //             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
    //           ${Menu.gap ? "mt-2" : "mt-2"} ${
    //               index === 0 && "bg-light-white"
    //             } `}
    //           >
    //             <img src={Menu.src} />
    //             <span
    //               className={`${!open && "hidden"} origin-left duration-200`}
    //             >
    //               {Menu.title}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="h-screen flex-1 ">
    //     <h1 className="">
    //       {" "}
    //       <Outlet />
    //     </h1>
    //   </div>
    // </div>
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-dark-purple h-screen p-5  pt-8 relative duration-300 `}
          >
            <img
              src={control}
              className={`absolute cursor-pointer -right-3  z-50 top-9 w-8  border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180 "} ${
                open && "-right-0"
              }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={logo}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                E-KYC Verification
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
             
                  <Link to={`/${Menu.title}`}
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-2" : "mt-2"} ${
                      index === 0 && "bg-light-white"
                    } `}
                  >
                    <img src={Menu.src} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </Link>
          
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;