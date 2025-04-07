import React from 'react';
import icon from '../assets/Icon.png';
import serviceimg from '../assets/tokyo-magnifier-web-search-with-elements 2.png';
import serviceimg1 from '../assets/Illustration (1).png';

const Card = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex px-10 lg:px-24 justify-between gap-6">
        {/* First Card */}
        <div className="bg-[#F3F3F3] flex justify-between w-[600px] h-[310px] border border-[#191A23] rounded-[45px] p-[50px]">
          <div className="w-[221px] h-[210px] flex flex-col justify-between">
            <div>
              <div className="bg-[#B9FF66] w-[221px] h-[38px] rounded-[7px] px-[7px]">
                <h3 className="text-3xl font-medium font-space-grotesk">Search engine</h3>
              </div>
              <div className="bg-[#B9FF66] w-[197px] h-[38px] rounded-[7px] px-[7px]">
                <h3 className="text-3xl font-medium font-space-grotesk">optimization</h3>
              </div>
            </div>

            <div className="w-[164px] h-[41px] flex items-center gap-2 mt-4">
              <img src={icon} alt="icon" className="h-[41px] w-[41px]" />
              <button className="text-xl font-normal font-space-grotesk">
                Learn more
              </button>
            </div>
          </div>

          <div className="w-[210px] h-[170px] p-[2px]">
            <img src={serviceimg} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#B9FF66] flex justify-between w-[600px] h-[310px] border border-[#191A23] rounded-[45px] p-[50px]">
          <div className="w-[221px] h-[210px] flex flex-col justify-between">
            <div>
              <div className="bg-[#F3F3F3] w-[221px] h-[38px] rounded-[7px] px-[7px]">
                <h3 className="text-3xl font-medium font-space-grotesk">Pay-per-click</h3>
              </div>
              <div className="bg-[#F3F3F3] w-[197px] h-[38px] rounded-[7px] px-[7px]">
                <h3 className="text-3xl font-medium font-space-grotesk">advertising</h3>
              </div>
            </div>

            <div className="w-[164px] h-[41px] flex items-center gap-2 mt-4">
              <img src={icon} alt="icon" className="h-[41px] w-[41px]" />
              <button className="text-xl font-normal font-space-grotesk">
                Learn more
              </button>
            </div>
          </div>

          <div className="w-[210px] h-[170px] p-[2px]">
            <img src={serviceimg1} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-5 flex flex-col gap-6">
        {[serviceimg, serviceimg1].map((img, index) => (
          <div
            key={index}
            className="bg-[#F3F3F3] border border-[#191A23] rounded-[30px] p-6 w-full flex flex-col items-start gap-4 shadow-sm"
          >
            <div>
              <div className="bg-[#B9FF66] w-fit px-2 py-1 rounded">
                <h3 className="text-xl font-medium font-space-grotesk leading-tight">
                  Search engine
                </h3>
              </div>
              <div className="bg-[#B9FF66] w-fit px-2 py-1 rounded">
                <h3 className="text-xl font-medium font-space-grotesk leading-tight">
                  optimization
                </h3>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <img src={img} alt="service" className="w-[180px] object-contain" />
            </div>

            <div className="flex items-center gap-2">
              <img src={icon} alt="icon" className="h-[28px] w-[28px]" />
              <button className="text-base font-normal font-space-grotesk">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
