import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus completely transformed our online strategy. Their team is detail-oriented, insightful, and incredibly helpful.",
    name: "Jane Doe",
    title: "CEO at InnovateX",
  },
  {
    quote:
      "Highly recommend them. Great communication, fantastic results, and a pleasure to work with!",
    name: "Mike Johnson",
    title: "CTO at WebWorks",
  },
];

const CARD_WIDTH = 606;
const GAP = 40;

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < testimonials.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 mobile:mb-[43px]">
      {/* Mobile View */}
      <div className="block md:hidden w-[430px] h-[554px] px-5 flex items-center justify-center">
        <div className="bg-[#191A23] text-white w-[390px] h-[554px] rounded-[45px] px-[30px] pt-[30px] pb-[40px] flex flex-col justify-between">
          <div className="w-full">
            <div className="w-full h-[302px] p-[30px] relative flex items-center border border-[#B9FF66] rounded-[45px]">
              <div className="absolute -bottom-2 left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#B9FF66]"></div>
              <p className="text-base font-normal font-space-grotesk leading-relaxed">
                "{testimonials[current].quote}"
              </p>
            </div>
            <div className="mt-[20px] pl-[10px]">
              <p className="text-[#B9FF66] font-semibold text-base">{testimonials[current].name}</p>
              <p className="text-sm text-white/80">{testimonials[current].title}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-[#B9FF66]/20 hover:bg-[#B9FF66]/40 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${
                    i === current ? 'bg-[#B9FF66]' : 'bg-white/50'
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-[#B9FF66]/20 hover:bg-[#B9FF66]/40 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full max-w-[1240px] bg-[#191A23] text-white rounded-[30px] overflow-hidden py-10 px-6">
        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 gap-[40px]"
            style={{
              transform: `translateX(-${(CARD_WIDTH + GAP) * current - CARD_WIDTH / 2}px)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-[606px] h-[335px] relative bg-[#191A23]"
              >
                <div className="absolute -bottom-3 left-10 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#B9FF66]"></div>

                <div className="w-[606px] h-[266px] flex justify-center items-center rounded-[45px] border border-[#B9FF66]">
                  <div className="w-[502px] h-[138px] flex items-center justify-center text-start">
                    <p className="text-sm mb-4">"{t.quote}"</p>
                  </div>
                </div>

                <div className="w-[526px] h-[49px] ml-20 mt-4">
                  <p className="text-[#B9FF66] font-semibold">{t.name}</p>
                  <p className="text-sm">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows & Dots (Centered with Arrows on Sides) */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-[#B9FF66]/20 hover:bg-[#B9FF66]/40 transition"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i === current ? 'bg-[#B9FF66]' : 'bg-white/50'}`}
              ></div>
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-[#B9FF66]/20 hover:bg-[#B9FF66]/40 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

