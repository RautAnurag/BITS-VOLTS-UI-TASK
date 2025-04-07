const Section = ({ title, text, bg = "transparent", titleWidth = "w-[178px]", textWidth = "w-[580px]" }) => {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto flex flex-col desktop:flex-row 
                 items-center desktop:items-start 
                 justify-center desktop:justify-start 
                 h-auto desktop:h-[51px] 
                 px-[20px] desktop:px-[100px] 
                 gap-[30px] desktop:gap-[40px] 
                 mt-[60px] desktop:mt-[140px] 
                 desktop:mb-[80px] mb-[40px] 
                 text-center desktop:text-left"
    >
      {/* Title Box */}
      <div
        className={`w-[161px] h-[46px] desktop:w-auto desktop:h-[51px] 
                    bg-[#B9FF66] rounded-[7px] px-[7px] flex items-center justify-center`}
      >
        <h2 className="text-4xl desktop:text-[40px] font-medium leading-tight font-space-grotesk">
          {title}
        </h2>
      </div>

      {/* Paragraph */}
      <p
        className={`w-[390px] h-[72px] desktop:${textWidth} desktop:h-[46px] 
                    text-base desktop:text-lg 
                    leading-tight font-normal font-space-grotesk 
                    bg-transparent desktop:${bg} 
                    text-center desktop:text-left flex items-center justify-center`}
      >
        {text}
      </p>
    </div>
  );
};


const Services = () => {
  return (
    <>
      {/* Services Section */}
      <Section
        title="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      {/* Testimonials Section */}
      <Section
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        textWidth="w-[473px]"
      />

      {/* Our Working Process Section */}
      <Section
        title="Our Working Process"
        text="Step-by-Step Guide to Achieving Your Business Goals"
        textWidth="w-[292px]"
      />
    </>
  );
};

export default Services;
