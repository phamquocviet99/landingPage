import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../_global/utils/dataConfig/_global";
import { HiArrowRight } from "react-icons/hi2";
import { BiMenu } from "react-icons/bi";
export default function Header() {
  const [isOpenMenu, openMenu] = useState(false);
  let Links = [
    { name: "Trang chủ", link: "/" },
    { name: "Về chúng tôi", link: "/ve-chung-toi" },
    // { name: "Dịch vụ", link: "/dich-vu" },
  ];
  return (
    <div className="relative">
      {isOpenMenu ? (
        <div
          onClick={() => openMenu(!isOpenMenu)}
          className="fixed h-screen w-screen bg-black bg-opacity-70 z-40"
        ></div>
      ) : null}
      {isOpenMenu ? (
        <div className="absolute top-20 z-50 w-full p-10 bg-gray-50">
          <div className="flex flex-col text-center gap-5">
            {Links.map((link, index) => (
              <div className="md:ml-8 text-base font-medium  " key={index}>
                <a
                  className="text-gray-700 hover:text-gray-900 duration-500 whitespace-nowrap"
                  // to={link.link}
                >
                  {link.name}
                </a>
              </div>
            ))}
            <a
              // to={"/vendor"}
              className="text-white flex text-center items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Trang của bạn
              <HiArrowRight className="text-xl" />
            </a>
          </div>
        </div>
      ) : null}
      <div className="mx-auto max-w-screen-xl  px-5">
        <div className="flex justify-between items-center">
          <div className="shrink-0 mr-4">
            <a
             to="/">
              <img
                className="object-cover w-full shrink-0 h-20"
                alt=""
                src={logo.fmpNoBgBlueTextLogo}
              />
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-5">
            {Links.map((link, index) => (
              <div className="md:ml-8 text-base font-medium  " key={index}>
                <a
                  className="text-gray-700 hover:text-gray-900 duration-500 whitespace-nowrap"
                  to={link.link}
                >
                  {link.name}
                </a>
              </div>
            ))}
            <a
              to={"/vendor"}
              className="text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Trang của bạn
              <HiArrowRight className="text-xl" />
            </a>
            {/* <SwitcheDarkMode /> */}
          </div>
          <div
            onClick={() => openMenu(!isOpenMenu)}
            className="block sm:hidden text-3xl"
          >
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
