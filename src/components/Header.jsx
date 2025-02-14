// import { useState } from "react";
// import { RiMenu2Line } from "react-icons/ri";


// function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-center py-[20px] px-5 lg:px-[40px] bg-gradient-to-r from-pink-300 to-pink-800">
//       <div className="flex items-center justify-between w-full max-w-screen-xl">
//         {/* Logo */}
//         <div>
//           <h1 className="text-[28px] font-extrabold text-white tracking-wide">
//             MY SPACE
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-8">
//           <a className="text-[16px] font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
//             Cover Page
//           </a>
//           <a className="text-[16px] font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
//             About Me
//           </a>
//           <a className="text-[16px] font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
//             Work Samples
//           </a>
//           <a className="text-[16px] font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
//             Resume
//           </a>
//           <a className="text-[16px] font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
//             Contact
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className={`lg:hidden flex items-center justify-center p-3 bg-black rounded-md z-[20] transition-all duration-300 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-80 pointer-events-auto"
//           }`}
//         >
//           <RiMenu2Line className="text-white text-3xl" />
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-white shadow-lg z-[20] transition-all duration-300 ${
//           open ? "translate-x-0" : "translate-x-[-300px]"
//         }`}
//       >
//         <nav className="flex flex-col items-center gap-8 pt-20">
//           <a
//             className="text-[20px] font-medium text-black hover:text-slate-500"
//             href=""
//           >
//             Cover Page
//           </a>
//           <a
//             className="text-[20px] font-medium text-black hover:text-slate-500"
//             href=""
//           >
//             About Me
//           </a>
//           <a
//             className="text-[20px] font-medium text-black hover:text-slate-500"
//             href=""
//           >
//             Work Samples
//           </a>
//           <a
//             className="text-[20px] font-medium text-black hover:text-slate-500"
//             href=""
//           >
//             Resume
//           </a>
//           <a
//             className="text-[20px] font-medium text-black hover:text-slate-500"
//             href=""
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;


import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center py-[20px] px-5 lg:px-[40px] bg-gradient-to-r from-pink-300 to-pink-800">
      <div className="flex items-center justify-between w-full max-w-screen-xl">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wider">
            MY SPACE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-200" href="/">
            Cover Page
          </a>
          <a className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-200" href="/aboutme">
            About Me
          </a>
          <a className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-200" href="/worksamples">
            Work Samples
          </a>
          {/* <a className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-200" href="">
            Resume
          </a> */}
          <a className="text-lg font-semibold text-white hover:text-gray-200 transition-all duration-200" href="/contacts">
            Contacts
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden flex items-center justify-center p-3 bg-black rounded-md z-[20] transition-all duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-80 pointer-events-auto"
          }`}
        >
          <RiMenu2Line className="text-white text-3xl" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-white shadow-lg z-[20] transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-[-300px]"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-black"
          >
            <RiCloseLine />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 pt-20">
          <a
            className="text-xl font-medium text-black hover:text-slate-500"
            href="/"
          >
            Cover Page
          </a>
          <a
            className="text-xl font-medium text-black hover:text-slate-500"
            href="/aboutme"
          >
            About Me
          </a>
          <a
            className="text-xl font-medium text-black hover:text-slate-500"
            href="/worksamples"
          >
            Work Samples
          </a>
          {/* <a
            className="text-xl font-medium text-black hover:text-slate-500"
            href=""
          >
            Resume
          </a> */}
          <a
            className="text-xl font-medium text-black hover:text-slate-500"
            href="/contacts"
          >
            Contacts
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
