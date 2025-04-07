import { useState } from "react";

const AccordionItem = ({ index, title, number, content, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-[45px] border border-[#191A23] transition-all duration-300
        flex flex-col gap-[30px] px-[30px] py-[30px] mt-[30px]
        desktop:px-[60px] desktop:py-[41px]
        ${index === 0 ? "mt-5" : ""}
        ${isOpen ? "bg-[#B9FF66]" : "bg-white"}`}
    >
      {/* Content (if open) */}
      {isOpen && (
        <>
          <hr className="border-[#191A23]" />
          <div>
            <p className="text-lg font-normal font-space-grotesk">{content}</p>
          </div>
        </>
      )}

      {/* Bottom row: Number + Title + Button */}
      <div className="w-full flex justify-between items-center">
        {/* Left: Number + Title */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-medium font-space-grotesk">
            {number}
          </span>
          <h4 className="font-space-grotesk font-medium text-3xl mobile:text-lg">
            {title}
          </h4>
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={`rounded-full flex items-center justify-center font-bold text-white bg-black text-2xl
            w-10 h-10 border border-black`}
        >
          {isOpen ? "–" : "+"}
        </button>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full desktop:max-w-[1440px] desktop:px-[100px] mx-auto mobile:px-[20px]">
      <AccordionItem
        index={0}
        title="Consultation"
        number="01"
        content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This allows us to tailor our services to your exact needs."
        isOpen={activeIndex === 0}
        onToggle={() => toggleAccordion(0)}
      />

      <AccordionItem
        index={1}
        title="Research and Strategy Development"
        number="02"
        content="We conduct in-depth market research and competitive analysis to build a tailored strategy that aligns with your brand and goals."
        isOpen={activeIndex === 1}
        onToggle={() => toggleAccordion(1)}
      />
    </div>
  );
};

export default Accordion;
