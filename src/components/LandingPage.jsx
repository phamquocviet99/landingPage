import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function LandingPage() {
  return (
    <div className=" block 2xl:flex justify-center">
      <div className="max-w-[1920px] w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
