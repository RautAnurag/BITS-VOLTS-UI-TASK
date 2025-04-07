// import React from 'react';
// import logo1 from '../assets/logo1.png';
// import logo2 from '../assets/logo2.png';
// import logo3 from '../assets/logo3.png';
// import logo4 from '../assets/logo4.png';
// import logo5 from '../assets/logo5.png';
// import logo6 from '../assets/logo6.png';

// const logos = [
//   logo1, logo2, logo3, logo4, logo5, logo6,
//   logo1, logo2, logo3, logo4, logo5, logo6, // Repeating for seamless loop
// ];

// const LogoMarquee = () => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap py-6 bg-white">
//       <div className="flex animate-marquee gap-12">
//         {logos.map((logo, index) => (
//           <img
//             key={index}
//             src={logo}
//             alt={`logo-${index}`}
//             className="h-12 w-auto object-contain"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LogoMarquee;



import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo1, logo2, logo3, logo4, logo5, logo6, // Repeating for seamless loop
];

const LogoMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-6 bg-white">
      <div className="flex animate-marquee gap-12">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;

