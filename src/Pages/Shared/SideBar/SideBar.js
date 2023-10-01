/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react";
import { useState } from "react";
import control from "../../../../src/assets/control.png";
import logo from "../../../../src/assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsShieldLock } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaShopLock } from "react-icons/fa6";
import { PiBankDuotone } from "react-icons/pi";
import { MdOutlineManageAccounts, MdSupportAgent } from "react-icons/md";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "HOME", src: <FaHome size={22} />, routes: "Home" },
    {
      title: "DOCUMENT OCR SCANNER",
      src: <FiEye size={22} />,
      routes: "DOCUMENT-ORC-SCANNER",
    },
    {
      title: "IDENTITY VERIFICATION ",
      src: <BsShieldLock size={22} />,
      routes: "IDENTITY-VERIFICATION",
    },
    {
      title: "BIOMETRIC VERIFICATION",
      src: <BsPersonBoundingBox size={22} />,
      routes: "BIOMETRIC-VERIFICATION",
    },
    {
      title: "Retail & E-commerce",
      src: <FaShopLock size={22} />,
      routes: "Retail-Ecommerce",
    },
    {
      title: "Financial Services",
      src: <PiBankDuotone size={22} />,
      // gap: true,
      routes: "Financial-Services",
    },
    { title: "CONTACT ", src: <MdSupportAgent size={22} />, routes: "CONTACT" },
    {
      title: "Accounts",
      src: <MdOutlineManageAccounts size={22} />,
      gap: true,
      routes: "Accounts",
    },
  ];
  return (
    <div>
      
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
          <div
            className={` ${open ? "w-72" : "w-20 "
              } bg-dark-purple h-screen p-5  pt-8 relative duration-300 `}
          >
            <img
              src={control}
              className={`absolute cursor-pointer -right-3  z-50 top-9 w-8  border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180 "} ${open && "-right-0"
                }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={logo}
                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                  }`}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                  }`}
              >
                E-KYC Verification
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <Link
                  to={`/${Menu.routes}`}
                  key={index}
                  className={`flex  uppercase rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-2" : "mt-2"} ${index === 0 && "bg-light-white"
                    } `}
                >
                  {/* <img src={Menu.src} /> */}
                  <span> {Menu.src}</span>
                  <span
                    className={`${!open && "hidden"} origin-left  duration-200`}
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
