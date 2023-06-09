import React, { useState } from "react";
import bg1 from "../../_global/assets/landingPageAssets/bg1.png";
import bg6 from "../../_global/assets/landingPageAssets/bg6.png";
import bg7 from "../../_global/assets/landingPageAssets/bg7.png";
import bg3 from "../../_global/assets/landingPageAssets/bg3.png";
import giftBox from "../../_global/assets/landingPageAssets/giftBox.png";
import anh7 from "../../_global/assets/landingPageAssets/anh7.png";
import anh8 from "../../_global/assets/landingPageAssets/anh8.png";
import background2 from "../../_global/assets/landingPageAssets/background2.jpg";
import bouquet from "../../_global/assets/landingPageAssets/bouquet.png";
import quocgia from "../../_global/assets/landingPageAssets/quocgia.png";
import AnhTai from "../../_global/assets/ImageFounder/AnhTai.jpg";
import ChiAi from "../../_global/assets/ImageFounder/ChiAi.jpg";
import AnhTrung from "../../_global/assets/ImageFounder/AnhTrung.jpg";
import ChiThien from "../../_global/assets/ImageFounder/ChiThien.jpg";
import ThayBao from "../../_global/assets/ImageFounder/ThayBao.jpg";
import ChiAnh from "../../_global/assets/ImageFounder/ChiAnh.jpg";
import creditCard from "../../_global/assets/landingPageAssets/creditCard.png";
import box from "../../_global/assets/landingPageAssets/box.png";
import hoa1 from "../Body/image/hoa1.jpg";
import hoa2 from "../Body/image/hoa2.jpg";
import hoa3 from "../Body/image/hoa3.jpg";
import hoa4 from "../Body/image/hoa4.jpg";
import hoa5 from "../Body/image/hoa5.jpg";
import hoa6 from "../Body/image/hoa6.jpg";
import hoa7 from "../Body/image/hoa7.jpg";
import hoa8 from "../Body/image/hoa8.jpg";
import hoa9 from "../Body/image/hoa9.jpg";
import hoa10 from "../Body/image/hoa10.jpg";
import hoa11 from "../Body/image/hoa11.jpg";
import hoa12 from "../Body/image/hoa12.jpg";

import { NavLink } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";
import { TbArrowDownLeft } from "react-icons/tb";
import { BiLeaf } from "react-icons/bi";
import ContentPerson from "./components/ContentPerson";
import image from "../../_global/assets/resources/bg6.png";
import image2 from "../../_global/assets/resources/bg7.png";
import TranThiHuuAi from "../../_global/assets/resources/1.png";
import PhanHieuThien from "../../_global/assets/resources/2.png";
import LuongNgocTrung from "../../_global/assets/resources/3.png";
import ChauHongAnh from "../../_global/assets/resources/4.png";
import NguyenThienBao from "../../_global/assets/resources/5.png";
import PhanMinhTai from "../../_global/assets/resources/6.png";

import "./style.css";

const resource = [
  {
    name: "Bà Trần Thị Hữu Ái",
    img: TranThiHuuAi,
    position: "CEO",
    description:
      "• Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành CNTT \n• Có hơn 10 năm kinh nghiệm kinh doanh trồng và phân phối ngành hoa tươi \n• Hơn 5 năm Ngành Chăm sóc sức khỏe chủ động",
  },
  {
    name: "Bà Phan Hiếu Thiện",
    img: PhanHieuThien,
    position: "Giám đốc điều hành",
    description:
      "• Có 20 năm kinh nghiệm vai trò lãnh đạo cấp Phường \n• Có hơn  20 năm chuyên ngành dịch vụ báo cáo thuế cho các doanh nghiệp",
  },
  {
    name: "Ông Lương Ngọc Trung",
    img: LuongNgocTrung,
    position: "Giám đốc chiến lược",
    description:
      "• Có hơn 30 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành cơ khí và ngành Sơn \n• Từng là nhà huấn luyện doanh nghiệp tại ACTION COACH \n• Hiện tại, Ông đang quản lí nhiều dự án xã hội mang tầm cỡ quốc gia",
  },
  {
    name: "Bà Châu Hồng Anh",
    img: ChauHongAnh,
    position: "Giám đốc sáng tạo",
    description:
      "• Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành công ty đào tạo và huấn luyện doanh nghiệp trong và ngoài nước",
  },
  {
    name: "Ông Nguyễn Thiên Bảo",
    img: NguyenThienBao,
    position: "Giám đốc R&D",
    description:
      "• Ông tốt nghiệp tiến sĩ AIAI tại Thụy Sĩ, và công tác  tại Mỹ 3 năm \n• HIện tại, ông là chuyên gia trí tuệ nhân tạo (AI) trẻ tuổi hàng đầu tại Viêt Nam",
  },
  {
    name: "Ông Phan Minh Tài",
    img: PhanMinhTai,
    position: "Giám đốc CNTT",
    description:
      "• Hơn 10 năm kinh nghiệm ROBOT \n• Ông là người đầu tiên dùng BOT để khớp lệnh giao dịch chứng khoán giữa 2 sàn \n• Xây dựng hệ thống website kinh doanh online tại Mĩ hoàn toàn tự động",
  },
];

export default function Body() {
  const listPerson = [
    {
      urlImage: ChiAi,
      name: "Bà Trần Thị Hữu Ái - CEO",
      experience: [
        "Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành CNTT.",
        "Có hơn 10 năm kinh nghiệm kinh doanh trồng và phân phối ngành Hoa Tươi",
        "Hơn 5 năm Ngành Chăm sóc sức khỏe chủ động",
      ],
    },
    {
      urlImage: ChiThien,
      name: "Bà Phan Hiếu Thiện - Giám Đốc Vân Hành",
      experience: [
        "Có 20 năm kinh nghiệm vai trò lãnh đạo cấp Phường.",
        "Có hơn 10 năm kinh nghiệm kinh doanh trồng và phân phối ngành Hoa Tươi",
        "Có hơn  20 năm chuyên ngành dịch vụ báo cáo thuế cho các doanh nghiệp",
      ],
    },
    {
      urlImage: AnhTrung,
      name: "Ông Lương Ngọc Trung-  Giám Đốc Chiến Lược",
      experience: [
        "Có hơn 30 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành cơ khí và ngành Sơn.",
        "Từng là nhà huấn luyện doanh nghiệp tại ACTION COACH.",
        "Hiện tại, Ông đang quản lí nhiều dự án xã hội mang tầm cỡ quốc gia.",
      ],
    },
    {
      urlImage: ChiAnh,
      name: "Bà Châu Hồng Anh - Giám Đốc Đào Tạo",
      experience: [
        "Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành công ty đào tạo và huấn luyện Doanh Nghiệp trong và ngoài nước..",
      ],
    },
    {
      urlImage: ThayBao,
      name: "Ông Nguyễn Thiên Bảo - Giám đốc R&D",
      experience: [
        "Ông tốt nghiệp tiến sĩ AIAI tại Thụy Sĩ, và công tác  tại Mỹ 3 năm.",
        "Hiện tại, Ông là chuyên gia trí tuệ nhân tạo (AI) trẻ tuổi hàng đầu tại Viêt Nam",
      ],
    },
    {
      urlImage: AnhTai,
      name: "Ông Phan Minh Tài - Giám Đốc CNTT",
      experience: [
        "Hơn 10 năm kinh nghiệm ROBOT",
        "•	Ông là người đầu tiên dùng BOT để khớp lệnh giao dịch chứng khoán giữa 2 sàn",
      ],
    },
  ];
  return (
    <div className="">
      <section className=" block lg:flex justify-end items-center gap-x-20 py-40 px-10 2xl:px-0 bg-[#FCFAF7]">
        <div className="max-w-[750px]">
          <h1 className="font-bold text-green-900  text-4xl md:text-5xl lg:text-6xl ">
            Nơi giao nhau giữa những tâm hồn yêu hoa !
          </h1>
          <h2 className="text-2xl font-medium mt-7 text-black">
            Sàn giao dịch hoe FMP là một nền tảng trực tuyến để đưa hoa từ nhà
            cung cấp đến nơi tiêu thụ.
          </h2>
          <div className="flex gap-x-5 mt-10">
            <button className="px-12 py-4 text-lg font-medium text-black rounded-2xl bg-[#F1D2A9] hover:bg-green-700 hover:text-white duration-300">
              Về chúng tôi
            </button>
            <button className="px-12 py-4 border text-lg font-medium text-black rounded-2xl bg-transparent hover:bg-green-700 hover:text-white duration-300">
              Cách hoạt động
            </button>
          </div>
        </div>
        <div className="">
          <div>
            {" "}
            <img
              alt=""
              className="object-contain max-w-[2/3] lg:max-w-[1/2] h-[570px] "
              src={bg1}
            ></img>
          </div>
        </div>
      </section>
      <section className="py-20 px-10 2xl:px-0">
        <div className="mx-auto max-w-screen-xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 items-center ">
            <div>
              <img
                className="max-h-full object-contain"
                alt=""
                src={quocgia}
              ></img>
            </div>

            <div className="gap-5 flex flex-col mb-10 md:mb-0 justify-center text-center md:text-right order-first md:order-last px-5 items-center">
              <h1 className="mb-4 text-3xl font-extrabold  leading-none tracking-tight text-[#F08832] md:text-4xl  items-end ">
                Sàn giao dịch hoa tươi đầu tiên tại Việt Nam kết nối đến trên{" "}
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 text-4xl font-extrabold  from-sky-400 ">
                  10 quốc gia
                </span>{" "}
              </h1>
              <p className="text-lg font-normal  text-gray-500 lg:text-xl dark:text-gray-400  items-end ">
                Khẳng định vị thế là đơn vị cung cấp dịch vụ và giải pháp cho
                thị trường hoa tốt hàng đầu Việt Nam, FMP là sàn thương mại điện
                tử hoa tươi trực tuyến uy tín, đem đến cho các nhà vườn, shop
                hoa các nhà kinh doanh hoa tươi một kênh bán hàng hiệu quả và
                tiên tiến.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="bg-[#FCFAF7] py-20 px-10 2xl:px-0">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 items-center">
              <div className="gap-5 flex flex-col mb-10 md:mb-0 justify-end text-center md:text-right  items-end px-5">
                <h1 className="mb-4 text-4xl font-extrabold  leading-none tracking-tight text-gray-900 lg:text-4xl dark:text-white">
                  Giải pháp đảm bảo đầu ra cho nhà vườn
                </h1>
                <p className="text-lg font-normal  text-gray-500 lg:text-xl dark:text-gray-400">
                  Ở <strong>FMP</strong> chúng tôi thấu hiểu mất mát những mùa
                  vụ đầu ra không ổn định, vì thế sàn giao dịch tạo kết nối trực
                  tiếp từ nhà vườn đến thẳng các nơi tiêu thụ
                </p>
                <div className="flex w-full justify-center md:justify-end">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Tìm hiểu thêm về chúng tôi
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <img
                  className="max-h-[400px] object-contain"
                  alt=""
                  src={bg3}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 2xl:px-0">
        <div className="mx-auto max-w-screen-xl my-24 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center leading-none text-gray-900  lg:text-5xl ">
            Cùng tham gia xây dựng thị trường hoa cùng FMP
          </h1>
          <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl ">
            Sản phẩm đa dạng
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            Đa dạng sản phẩm được cung cấp bởi hàng triệu nhà vườn trong và
            ngoài nước
          </p>
        </div>
        <div className="mx-auto max-w-screen-xl mb-10 ">
          <p
            // onClick={() => navigate("/vendor")}
            className="text-right py-2 hover:underline cursor-pointer"
          >
            Xem thêm các sản phẩm
          </p>
          <div className="">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa3}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa4}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa5}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa6}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover "
                    src={hoa7}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa8}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa9}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa10}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa11}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-full w-full rounded-lg object-cover"
                    src={hoa12}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 2xl:px-0">
        {" "}
        <div className="mx-auto max-w-screen-xl text-right py-8 lg:py-16">
          <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Xử lí giao dịch siêu tốc
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
            Hoàn thành giao dịch chỉ trong 1 phút.
          </p>
        </div>
      </section>
      <section className="">
        <div className="bg-[#FCFAF7] py-20 px-10 2xl:px-0">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl w-full h-full shadow-xl p-10 hover:bg-blue-100 duration-300">
                <div className="flex justify-between items-center">
                  <img className=" h-11 object-cover" alt="" src={bouquet} />
                  <div className="border-blue-100 rounded-full h-12 w-12 border-2 relative bg-white">
                    <RxArrowTopRight className="absolute z-10 -bottom-2 text-black -left-2 text-4xl " />
                  </div>
                </div>
                <p className="text-lg font-medium mt-3">Tạo đơn hàng dễ dàng</p>
                <p className="text-base text-gray-700 mt-3">
                  Ở FMP, việc bắt tay vào thị trường hoa chưa bao giờ dễ dàng
                  đến thế!
                </p>
              </div>
              <div className="bg-white rounded-xl w-full h-full shadow-xl p-10 hover:bg-blue-100 duration-300">
                <div className="flex justify-between items-center">
                  <img className=" h-11 object-cover" alt="" src={box} />
                  <div className="border-blue-100 rounded-full h-12 w-12 border-2 relative bg-white">
                    <RxArrowTopRight className="absolute z-10 -bottom-2 text-black -left-2 text-4xl " />
                  </div>
                </div>
                <p className="text-lg font-medium mt-3">
                  Khối lượng giao dịch lớn
                </p>
                <p className="text-base text-gray-700 mt-3">
                  Không còn lo vấn đề thiếu hàng hoá vì trên FMP, các đối tác
                  của bạn luôn có đủ!
                </p>
              </div>
              <div className="bg-white rounded-xl w-full h-full shadow-xl p-10 hover:bg-blue-100 duration-300">
                <div className="flex justify-between items-center">
                  <img className=" h-11 object-cover" alt="" src={creditCard} />
                  <div className="border-blue-100 rounded-full h-12 w-12 border-2 relative bg-white">
                    <RxArrowTopRight className="absolute z-10 -bottom-2 text-black -left-2 text-4xl " />
                  </div>
                </div>
                <p className="text-lg font-medium mt-3">
                  Thanh toán tiện lợi, nhanh chóng
                </p>
                <p className="text-base text-gray-700 mt-3">
                  Luôn đảm bảo các giao dịch được nhanh chóng và an toàn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FCFAF7] py-20 px-10 2xl:px-0">
        <div className="w-full mx-auto container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-5">
            <div className="bg-white  rounded-tr-[70px] rounded-bl-[70px] md:min-w-[500px] max-w-[600px] z-10 p-10 text-blue-600 hover:text-white hover:bg-blue-700 duration-300">
              <div className="flex justify-between items-center">
                {" "}
                <div className=" rounded-full p-4 flex justify-center items-center bg-[#FCFAF7]">
                  <img
                    alt=""
                    className="h-9 w-9 object-cover"
                    src={giftBox}
                  ></img>
                </div>
                <img
                  className=" h-16 opacity-10 object-cover"
                  alt=""
                  src={giftBox}
                />
              </div>{" "}
              <p className="text-2xl font-medium ">
                Quy trình vận chuyển thuận tiện
              </p>
              <p className="text-base mt-5 font-medium ">
                Tối ưu hoá quy trình, giảm thiểu chi phí vận hành, vận chuyển
              </p>
            </div>
            <div className="w-full flex md:justify-end justify-center ">
              <img
                className="max-h-full object-contain min-w-[300px] max-w-[500px]"
                alt=""
                src={anh7}
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className="bg-fixed bg-no-repeat bg-center bg-cover relative w-full"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className=" absolute  z-10 mx-auto max-w-screen-xl px-10 2xl:px-0 w-full bg-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div>
              <div className="flex items-center">
                <BiLeaf className="text-2xl text-white" />
                <p className="text-lg font-medium text-white">
                  Kết nối nhà vườn
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <BiLeaf className="text-2xl text-white" />
                <p className="text-lg font-medium text-white">
                  Kết nối nhà vườn
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" opacity-25 bg-black h-[600px] w-full"></div>
      </section> */}
      {/* <PersonEx1 listPerson={listPerson} /> */}
      <section className="py-20 px-10 2xl:px-0 bg-[#FCFAF7]">
        <div className="mx-auto max-w-screen-xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center ">
            <div>
              <img
                className="max-h-full object-contain"
                alt=""
                src={anh8}
              ></img>
            </div>

            <div className="gap-5 flex flex-col mb-10 md:mb-0">
              <h1 className="mb-4 text-3xl font-extrabold  text-[#F08832] md:text-4xl text-right">
                Hỗ trợ 24/7
              </h1>
              <p className="text-lg font-normal  text-gray-500 lg:text-xl  text-right ">
                Nhân viên nhà FMP luôn túc trực 24/7 để hỗ trợ bạn với trải
                nghiệm trên sản phẩm nhà FMP.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hidden lg:grid">
          <div className="flex items-center w-full pt-[5vw]">
            <div className="w-1/3 p-[2%] text-3xl text-orange-500 font-extrabold">
              Các nhà kinh doanh hàng đầu trong lĩnh vực kinh doanh của mình
            </div>
            <div className="w-2/3 flex justify-center">
              <div className="relative w-[25vw] h-[27vw]">
                <InfoCard
                  bottom={"60%"}
                  right={"85%"}
                  color={"blue"}
                  resource={resource[0]}
                />
                <InfoCard
                  top={"60%"}
                  right={"87%"}
                  color={"blue"}
                  resource={resource[2]}
                />
                <InfoCard
                  bottom={"55%"}
                  left={"85%"}
                  color={"orange"}
                  resource={resource[1]}
                />
                <InfoCard
                  top={"70%"}
                  left={"83%"}
                  color={"orange"}
                  resource={resource[3]}
                />
                <img alt="" className="w-full h-full" src={image} />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[8vw]">
            <div className="w-2/3 flex justify-center">
              <div className="relative w-[22vw] h-[28vw]">
                <InfoCard
                  bottom={"25%"}
                  right={"83%"}
                  color={"orange"}
                  resource={resource[5]}
                />

                <InfoCard
                  top={"30%"}
                  left={"80%"}
                  color={"blue"}
                  resource={resource[4]}
                />
                <img alt="" className="w-full h-full" src={image2} />
              </div>
            </div>

            <div className="w-1/3 text-right p-[2%] text-3xl text-blue-500 font-extrabold">
              Cùng các chuyên gia công nghệ Hàng đầu của Việt Nam và đặc biệt:
              Bot và AI.
            </div>
          </div>
        </div>

        {resource?.map((e, i) => (
          <div className="w-full mt-5 p-[5% 2%] lg:hidden">
            <div
              className="flex w-full gap-[5%] justify-center items-center "
              style={
                {
                  // flexDirection: i % 2 !== 0 && "row-reverse",
                }
              }
            >
              <img alt="" className="w-1/4" src={e?.img} />
              <div className="w-2/3 text-sm md:text-[1.8vw] whitespace-break-spaces ">
                <div className="font-semibold text-base mb-[1vw] md:text-[2vw]">
                  {e?.name} <br />
                  {e?.position}
                </div>

                {e?.description}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const InfoCard = ({ top, right, bottom, left, color, resource }) => {
  return (
    <div
      className="absolute w-[20vw] bg-white rounded shadow-xl"
      id="info-card"
      style={{
        bottom: bottom,
        right: right,
        top: top,
        left: left,
      }}
    >
      <div
        className={`font-bold text-[1.4vw] text-${color}-500`}
        style={{ color: color }}
      >
        {resource?.name}
        <div className={`text-${color}-600 font-semibold text-[1.2vw]`}>
          {resource?.position}
        </div>
      </div>

      <div className="content">{resource?.description}</div>
    </div>
  );
};

function PersonEx1({ listPerson }) {
  const [show, setShow] = useState(false);
  return (
    <section className="px-10 2xl:px-0">
      <div className="mx-auto max-w-screen-xl  py-8 lg:py-16 ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center leading-none text-gray-900  lg:text-5xl ">
          Nguồn nhân lực của chúng tôi
        </h1>
        <div
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
          className="w-full flex justify-center relative mt-20"
        >
          {show && (
            <>
              {" "}
              <div className="z-10 left-10 top-5 absolute">
                <ContentPerson person={listPerson[0]} />
              </div>
              <div className="z-10 left-0 top-96 absolute">
                <ContentPerson person={listPerson[2]} />
              </div>
              <div className="z-10 right-0 top-96 absolute">
                <ContentPerson person={listPerson[3]} />
              </div>
              <div className="z-10 right-0 top-5 absolute">
                <ContentPerson person={listPerson[1]} />
              </div>
            </>
          )}

          <img
            className="max-h-full object-contain min-w-[300px] max-w-[600px]
            "
            alt=""
            src={bg6}
          ></img>
        </div>
        <PersonEx2 listPerson={listPerson} />
      </div>
    </section>
  );
}

function PersonEx2({ listPerson }) {
  const [show, setShow] = useState(false);
  return (
    <section className="px-10 2xl:px-0">
      <div className="mx-auto max-w-screen-xl  py-8 lg:py-16 ">
        <div
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
          className="w-full flex justify-center relative mt-20"
        >
          {show && (
            <>
              {" "}
              <div className="z-10 right-0 top-5 absolute">
                <ContentPerson person={listPerson[4]} />
              </div>
              <div className="z-10 left-0 top-96 absolute">
                <ContentPerson person={listPerson[5]} />
              </div>
            </>
          )}

          <img
            className="max-h-full object-contain min-w-[300px] max-w-[500px]
            "
            alt=""
            src={bg7}
          ></img>
        </div>
      </div>
    </section>
  );
}
