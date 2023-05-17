import React from "react";
// import "./Footer.scss";
import { logo } from "../../_global/utils/dataConfig/_global";

import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="h-fit px-12 ">
      <div className="block md:flex justify-between gap-5">
        <div className="">
          <div className="flex md:block justify-center items-center">
            <img
              src={logo.fmpBlueBgLogo}
              alt=""
              className="h-12 rounded-full mt-5"
            />
          </div>
          <div className="flex md:block justify-center items-center">
            <h5 className="w-full">
              Tự hào là đơn vị cung cấp dịch vụ trung gian giao thương giữa chủ
              vườn hoa, doanh nghiệp trồng hoa với chủ cửa hàng hoa và người
              tiêu dùng. Lấy uy tin làm giá trị!
            </h5>
          </div>
          <div className=" flex md:block justify-center items-center">
            <div className="flex justify-start items-center gap-5 text-4xl">
              <a href="https://facebook.com/" className="facebook">
                {" "}
                <BsFacebook />
              </a>
              <a href="https://twitter.com/" className="twitter">
                {" "}
                <FiTwitter />
              </a>
              <a href="https://linkedin.com/" className="linkedin">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="about-us">
          <div className="groupInfo space-y-4 text-center md:text-start ">
            <ul className="my-1">
              <h2>Về chúng tôi</h2>
            </ul>
            <ul className="my-1">
              <a href="/">Thông tin về chúng tôi</a>
            </ul>
            <ul className="my-1">
              <a href="/">Mạng xã hội</a>
            </ul>
            <ul className="my-1">
              <a href="/">Trang chủ</a>
            </ul>
            <ul className="my-1">
              <a href="/">Địa chỉ</a>
            </ul>
            <ul className="my-1">
              <a href="/">Liên hệ</a>
            </ul>
            <ul className="my-1">
              <a href="/">Tuyển dụng</a>
            </ul>
            <ul className="my-1">
              <a href="/">Trở thành nhà đầu tư</a>
            </ul>
          </div>
        </div>
        <div className="services">
          <div className="groupInfo space-y-4 text-center md:text-start ">
            <ul className="my-1">
              <h2>Dịch vụ</h2>
            </ul>
            <ul className="my-1">
              <a href="/">FMP Marketplace</a>
            </ul>
            <ul className="my-1">
              <a href="/">Hỗ trợ vận chuyển</a>
            </ul>
            <ul className="my-1">
              <a href="/">Marketing FMP</a>
            </ul>
          </div>
        </div>
        <div className="support">
          <div className="groupInfo space-y-4 text-center md:text-start ">
            <ul className="my-1">
              <h2>Hỗ Trợ</h2>
            </ul>
            <ul className="my-1">
              <a href="/">FAQ</a>
            </ul>
            <ul className="my-1">
              <a href="/">Chính sách và bảo mật</a>
            </ul>
            <ul className="my-1">
              <a href="/">Gọi hỗ trợ khách hàng</a>
            </ul>
            <ul className="my-1">
              <a href="/">Thông tin doanh nghiệp</a>
            </ul>
          </div>
        </div>
        <div className="relationship">
          <div className="groupInfo space-y-4 text-center md:text-start ">
            <ul className="my-1">
              <h2>Quan hệ B2B</h2>
            </ul>
            <ul className="my-1">
              <a href="/">WhatsApp</a>
            </ul>
            <ul className="my-1">
              <a href="/">24/7 Hotline</a>
            </ul>
          </div>
        </div>
        <div className="enterprise md:w-1/5">
          <div className="groupInfo text-center md:text-start ">
            <ul className="text-center md:text-start  space-y-4">
              <h2>Cty CP Flower Marketplace - FMP</h2>
              <li>
                Mã số doanh nghiệp: <b> 0317396199</b> do Sở Kế hoạch & Đầu tư
                TP Hồ Chí Minh cấp lần đầu ngày 21/07/2022
              </li>
              <li>
                Email: <span className="font-semibold">ctyfmp@gmail.com</span>
              </li>
              <li>
                Số điện thoại:{" "}
                <span className="font-semibold">0983277941 </span>
              </li>
              <li>
                Địa chỉ:{" "}
                <span className="font-semibold">
                  477/92 Kinh Dương Vương, An Lạc, Bình Tân, Hồ Chí Minh{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line-y my-5"></div>
      <div className="text-center pb-5">
        <p>{`(c) 2023 FMP Co.Ltd. All copyrights reserved.`}</p>
      </div>
    </div>
  );
}
