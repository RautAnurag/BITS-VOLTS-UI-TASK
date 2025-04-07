
import React from 'react';
import illustration from '../assets/Illustration.png';

const HeroHeader = () => {
  return (
    <div className="flex flex-col desktop:flex-row items-center desktop:items-start justify-between mt-10 gap-10 desktop:h-[515px]">
      
      {/* Text and Button (reordered in mobile) */}
      <div className="flex flex-col order-1 desktop:order-none gap-6 w-full desktop:w-[531px]">
        <h1 className="text-[42px] sm:text-[43px] desktop:text-6xl font-medium font-space-grotesk leading-tight desktop:leading-[72px] w-full desktop:w-[531px]">
          Navigating the digital landscape for success
        </h1>

        {/* Illustration in mobile - moved between heading and paragraph */}
        <div className="w-full h-[310px] desktop:hidden">
          <img
            src={illustration}
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-base px-[10px] w-[410px] h-[96px] sm:text-lg font-normal font-space-grotesk text-gray-800 desktop:w-[500px]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>

        <button className="bg-[#191A23] text-white w-full sm:w-[390px] desktop:w-[264px] h-[60px] desktop:h-[68px] border border-[#191A23] rounded-[14px] text-lg desktop:text-xl font-normal font-space-grotesk">
          Book a consultation
        </button>
      </div>

      {/* Desktop-only image on the right */}
      <div className="w-full max-w-[430px] h-[310px] desktop:max-w-[600px] desktop:h-[515px] hidden desktop:block">
        <img
          src={illustration}
          alt="Illustration"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
