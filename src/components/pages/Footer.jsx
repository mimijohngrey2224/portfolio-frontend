// import React from 'react'
// import { BsGithub } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";

// function Footer() {
//   return (
//    <div className="flex items-center justify-center py-[20px] px-5 lg:px-[40px] bg-gradient-to-r from-pink-300 to-pink-800">
//      <div className="flex items-center justify-center md:justify-start mb-5 md:mb-0">
//             <p className=''>My Space</p>     
//         </div>
//         <div>
//         <p className=''>Portfolio</p>
//         </div>
//      <footer>
//         <div className=''>
//             <h1 className=''>Follow Us</h1>
//             <div className=''>
//                 <a className='' href="">
//                     <BsGithub />
//                 </a>
//                 <a className='' href="">
//                     <BsLinkedin />
//                 </a>
//                 <a className='' href="">
//                     <FaXTwitter />
//                 </a>
//                 <a className='' href="">
//                     <FaSquareInstagram />
//                 </a>
//             </div>
//         </div>
//     </footer>
//    </div>
    
//   )
// }

// export default Footer



// import React from 'react';
// import { BsGithub } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";

// function Footer() {
//   return (
//     <div className="bg-gradient-to-r from-pink-300 to-pink-800 text-white py-8">
//       <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
//         {/* Left Section: Branding */}
//         <div className="text-center lg:text-left mb-6 lg:mb-0">
//           <p className="text-2xl font-semibold">My Space</p>
//           <p className="text-sm">Portfolio</p>
//         </div>

//         {/* Center Section: Copyright or Message */}
//         <div className="text-center mb-6 lg:mb-0">
//           <p className="text-sm">© 2025 My Space. All rights reserved.</p>
//         </div>

//         {/* Right Section: Social Links */}
//         <div className="flex space-x-6 justify-center lg:justify-end text-2xl">
//           <a href="https://github.com/mimijohngrey2224" className="hover:text-gray-200 transition duration-300">
//             <BsGithub />
//           </a>
//           <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-gray-200 transition duration-300">
//             <BsLinkedin />
//           </a>
//           <a href="https://twitter.com/@mimijohn7" className="hover:text-gray-200 transition duration-300">
//             <FaXTwitter />
//           </a>
//           <a href="https://www.instagram.com/@ut_mimigal" className="hover:text-gray-200 transition duration-300">
//             <FaSquareInstagram />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-800 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        {/* Left Section: Branding */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-2xl font-semibold">My Space</p>
          <p className="text-sm">Portfolio</p>
        </div>

        {/* Center Section: Copyright or Message */}
        <div className="text-center mb-6 lg:mb-0">
          <p className="text-sm">© 2025 My Space. All rights reserved.</p>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex space-x-6 justify-center lg:justify-end text-2xl">
          <a href="https://github.com/mimijohngrey2224" className="hover:text-gray-200 transition duration-300">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/blessing-john-49a97a348/" className="hover:text-gray-200 transition duration-300">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/@mimijohn7" className="hover:text-gray-200 transition duration-300">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/@ut_mimigal" className="hover:text-gray-200 transition duration-300">
            <FaSquareInstagram />
          </a>
        </div>
      </div>

      {/* Curved effect */}
      {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-pink-300 to-pink-800 transform rotate-180 rounded-t-3xl"></div> */}
    </div>
  );
}

export default Footer;
