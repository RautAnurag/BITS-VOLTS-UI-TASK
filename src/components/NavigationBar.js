import React, { useState } from 'react';
import logo from '../assets/Vector.png';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-2">
      <div className="flex items-center justify-between py-4 desktop:py-0 h-[68px]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Positivus Logo" className="h-9 w-9" />
          <h1 className="text-3xl font-normal font-space-grotesk leading-7">Positivus</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden desktop:flex items-center space-x-10 w-[811px] h-[68px]">
          <ul className="flex items-center space-x-10 text-black text-[20px] leading-[28px] font-normal font-space-grotesk">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <button className="border border-[#191A23] rounded-[14px] w-[231px] h-[68px] text-[20px] leading-[28px] font-normal font-space-grotesk">
            Request a quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="desktop:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="desktop:hidden px-6 pb-6 bg-white space-y-4 font-space-grotesk text-[18px]">
          <a href="#" className="block text-black">About us</a>
          <a href="#" className="block text-black">Services</a>
          <a href="#" className="block text-black">Use Cases</a>
          <a href="#" className="block text-black">Pricing</a>
          <a href="#" className="block text-black">Blog</a>
          <button className="w-full border border-[#191A23] rounded-[14px] py-4 text-[20px] leading-[28px] font-normal">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
