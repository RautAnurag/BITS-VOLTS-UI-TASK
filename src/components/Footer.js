import React, { useState } from "react";
import logo from "../assets/Vector.png";
import iconfb from "../assets/Iconfb.png";
import iconx from "../assets/Iconx.png";
import iconin from "../assets/Iconin.png";
import positive from "../assets/Positivus.png"

const Footer = () => {
  return (
<div className="mx-[20px] desktop:mx-auto desktop:max-w-[1240px]">
  <footer className="w-full desktop:mt-[107px] rounded-[45px] bg-[#191A23] pt-[55px] pb-[50px] desktop:px-[60px] text-white font-space-grotesk">
    <div className="w-full flex flex-col gap-[66px]">
      
      {/* Top Section: Logo + Nav */}
      <div className="flex flex-col desktop:flex-row justify-between items-center w-full gap-8">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="Positivus Logo" className="h-7 w-7" />
          <img src={positive} alt="Positivus" className="h-[23px] w-[140px]" />
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col desktop:flex-row text-center items-center gap-4 desktop:gap-10 text-lg">
          <li><a href="#" className="underline">About us</a></li>
          <li><a href="#" className="underline">Services</a></li>
          <li><a href="#" className="underline">Use Cases</a></li>
          <li><a href="#" className="underline">Pricing</a></li>
          <li><a href="#" className="underline">Blog</a></li>
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden desktop:flex gap-5 justify-center">
          <img src={iconin} alt="LinkedIn" className="w-[30px] h-[30px]" />
          <img src={iconfb} alt="Facebook" className="w-[30px] h-[30px]" />
          <img src={iconx} alt="X" className="w-[30px] h-[30px]" />
        </div>
      </div>

      {/* Contact + Subscribe */}
      <div className="flex flex-col desktop:flex-row w-full gap-[40px] desktop:gap-[154px] items-start">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-[27px] w-full desktop:w-[332px] items-center desktop:items-start text-center desktop:text-left">
          <div className="w-[126px] h-[32px] bg-[#B9FF66] rounded-[7px] flex items-center justify-center">
            <h4 className="text-xl font-medium text-black">Contact us:</h4>
          </div>
          <div className="flex flex-col gap-3 text-lg font-normal">
            <p>Email: info@Positivus.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p className="leading-tight">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div className="w-full desktop:w-[634px] bg-[#292A32] rounded-[14px] px-[20px] py-[30px] desktop:px-[40px] desktop:py-[40px] flex flex-col items-center gap-6">
          <form className="flex flex-col gap-4 desktop:flex-row desktop:items-center w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full desktop:w-[285px] h-[60px] rounded-[14px] px-[25px] py-[18px] border border-[#F3F3F3] bg-transparent text-white placeholder:text-[#ccc]"
            />
            <button
              type="submit"
              className="h-[60px] w-full desktop:w-auto px-4 bg-[#B9FF66] text-xl font-normal text-black rounded-[14px]"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Social Icons below Subscribe */}
      <div className="flex desktop:hidden gap-5 justify-center">
        <img src={iconin} alt="LinkedIn" className="w-[30px] h-[30px]" />
        <img src={iconfb} alt="Facebook" className="w-[30px] h-[30px]" />
        <img src={iconx} alt="X" className="w-[30px] h-[30px]" />
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="flex flex-col mt-10 w-full">
      <hr className="w-full h-[1px] bg-white mb-6" />
      <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-[50px] text-lg font-normal items-center justify-center desktop:justify-start">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p className="underline cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Footer;

