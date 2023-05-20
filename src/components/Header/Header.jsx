import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../_global/utils/dataConfig/_global";
import { FaBars, FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
export default function Header() {
  const [isOpenMenu, openMenu] = useState(false);
  let Links = [
    { name: "Trang chủ", link: "/" },
    { name: "Về chúng tôi", link: "/ve-chung-toi" },
    // { name: "Dịch vụ", link: "/dich-vu" },
  ];
  return (
    <div className="w-full bg-[#FCFAF7] px-5 2xl:px-0">
      <div className=" w-full bg-green-900 rounded-b-3xl mx-auto max-w-screen-2xl ">
        <div className="grid grid-cols-2 py-[20px] px-[50px]">
          <div>
            <p className="text-white hidden md:block text-xs md:text-base font-medium">
              Chào mừng bạn đến với FMP - Sàn giao dịch hoa
            </p>
            <p className="text-white block md:hidden text-sm md:text-base font-medium">
              FMP xin chào !
            </p>
          </div>
          <div className="flex justify-end  gap-x-3 text-white h-full w-full items-center">
            <FaFacebookF className="text-base hover:text-green-600 duration-200" />
            <AiOutlineTwitter className="text-xl hover:text-green-600 duration-200" />
            <BsYoutube className="text-xl hover:text-green-600 duration-200" />
          </div>
        </div>
      </div>
      <div className="flex justify-between h-fit mx-auto max-w-screen-2xl  px-4 md:px-0 items-center">
        <div className="flex">
          <div className="flex items-center gap-x-2">
            {" "}
            <img
              alt=""
              src={logo.fmpLogoFlowered}
              className="my-2 h-10 md:h-20 object-cover"
            />
            <div>
              {" "}
              <p className="font-medium text-lg md:text-3xl text-blue-800">
                FMP
              </p>
              <p className="text-green-900 text-xs md:text-base font-medium whitespace-nowrap">
                Sàn giao dịch hoa
              </p>
            </div>
          </div>

          <div style={{ width: "1px" }} className=" bg-gray-300 h-24 ml-14" />
          <div className=" gap-x-7 items-center px-16 text-[18px] font-semibold text-green-900 hidden lg:flex ">
            <p className="hover:text-green-600 duration-200 cursor-pointer">
              Trang chủ
            </p>
            <p className="hover:text-green-600 duration-200 cursor-pointer">
              Về chúng tôi
            </p>
            <p className="hover:text-green-600 duration-200 cursor-pointer">
              Giới thiệu
            </p>
          </div>
        </div>

        <div className="w-fit flex justify-end items-center h-full">
          <button className="py-4 h-fit px-4 bg-green-900 hover:bg-green-600 rounded-2xl text-white font-medium hidden lg:flex whitespace-nowrap">
            Chưa biết
          </button>
          <div
            style={{ width: "1px" }}
            className=" bg-gray-300 h-24 mx-14 hidden lg:block"
          />
          <TbGridDots className=" text-4xl text-green-900 hover:text-green-600 hidden md:block " />
          <div className="rounded-lg border border-gray-300 p-2 ml-5 cursor-pointer lg:hidden">
            <FaBars className=" text-3xl text-green-900 " />
          </div>
        </div>
      </div>
      <div style={{ height: "1px" }} className=" bg-gray-300 w-full" />
    </div>
  );
}
