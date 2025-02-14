// import me from "/me.jpg";
// import me2 from "/me2.jpg";
// import me3 from "/me3.jpg"

// function Coverpage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-10 px-5 py-10 space-y-5 sm:space-y-0">
//         {/* Text Content */}
//         <div className="text-center sm:text-left max-w-xl space-y-4">
//           <h1 className="text-4xl font-bold text-gray-800">Introduction</h1>
//           <p className="text-xl text-gray-600">Welcome to Mimi's Portfolio!</p>
//           <p className="text-lg text-gray-700">
//             I am a <span className="font-semibold">Full-stack Web Developer</span> with a passion for creating <span className="font-semibold">beautiful and innovative websites</span>. With a strong focus on <span className="font-semibold">both frontend and backend development</span>, I aim to craft work that not only looks great but also delivers real value.
//           </p>
//           <p className="text-lg text-gray-700">
//             Explore my portfolio to see how I bring ideas to life, and feel free to reach out if you'd like to collaborate or learn more.
//           </p>
//         </div>
        
//         {/* Image Section */}
//         <div className="relative">
//           <img 
//             className="w-48 sm:w-72 rounded-full shadow-xl object-cover"
//             src={me} 
//             alt="Mimi"
//           />
//            <img 
//             className="w-48 sm:w-72 rounded-full shadow-xl object-cover"
//             src={me2} 
//             alt="Mimi"
//           />
//            <img 
//             className="w-48 sm:w-72 rounded-full shadow-xl object-cover"
//             src={me3} 
//             alt="Mimi"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coverpage;


// import { useState, useEffect } from "react";
// import me from "/me.jpg";
// import me2 from "/me2.jpg";
// import me3 from "/me3.jpg";

// function Coverpage() {
//   // State to track the current image
//   const [currentImage, setCurrentImage] = useState(0);

//   // Array of images
//   const images = [me, me2, me3];

//   // Change image every 1 second (1000ms)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 1000);

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-10 px-5 py-10 space-y-5 sm:space-y-0">
//         {/* Text Content */}
//         <div className="text-center sm:text-left max-w-xl space-y-4">
//           <h1 className="text-4xl font-bold text-gray-800">Introduction</h1>
//           <p className="text-xl text-gray-600">Welcome to Mimi's Portfolio!</p>
//           <p className="text-lg text-gray-700">
//             I am a <span className="font-semibold">Full-stack Web Developer</span> with a passion for creating <span className="font-semibold">beautiful and innovative websites</span>. With a strong focus on <span className="font-semibold">both frontend and backend development</span>, I aim to craft work that not only looks great but also delivers real value.
//           </p>
//           <p className="text-lg text-gray-700">
//             Explore my portfolio to see how I bring ideas to life, and feel free to reach out if you'd like to collaborate or learn more.
//           </p>
//         </div>
        
//         {/* Image Section */}
//         <div className="relative w-72 h-72 -mt-12">
//           <img 
//             className={`absolute w-48 sm:w-72 rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 0 ? "opacity-100" : "opacity-0"}`}
//             src={me} 
//             alt="Mimi"
//           />
//           <img 
//             className={`absolute w-48 sm:w-72 rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 1 ? "opacity-100" : "opacity-0"}`}
//             src={me2} 
//             alt="Mimi"
//           />
//           <img 
//             className={`absolute w-48 sm:w-72 rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 2 ? "opacity-100" : "opacity-0"}`}
//             src={me3} 
//             alt="Mimi"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coverpage;

import { useState, useEffect } from "react";
import me from "/me.jpg";
import me2 from "/me2.jpg";
import me3 from "/me3.jpg";

function Coverpage() {
  // State to track the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images
  const images = [me, me2, me3];

  // Change image every 1 second (1000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10 sm:px-5">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-10 space-y-5 sm:space-y-0 w-full max-w-screen-lg mx-auto">
        {/* Text Content */}
        <div className="text-center sm:text-left max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Introduction</h1>
          <p className="text-lg sm:text-xl text-gray-600">Welcome to Mimi's Portfolio!</p>
          <p className="text-base sm:text-lg text-gray-700">
            I am a <span className="font-semibold">Full-stack Web Developer</span> with a passion for creating <span className="font-semibold">beautiful and innovative websites</span>. With a strong focus on <span className="font-semibold">both frontend and backend development</span>, I aim to craft work that not only looks great but also delivers real value.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Explore my portfolio to see how I bring ideas to life, and feel free to reach out if you'd like to collaborate or learn more.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-40 sm:w-72 h-40 sm:h-72 -mt-12 sm:-mt-16">
          <img
            className={`absolute w-full h-full rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 0 ? "opacity-100" : "opacity-0"}`}
            src={me}
            alt="Mimi"
          />
          <img
            className={`absolute w-full h-full rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 1 ? "opacity-100" : "opacity-0"}`}
            src={me2}
            alt="Mimi"
          />
          <img
            className={`absolute w-full h-full rounded-full shadow-xl object-cover transition-opacity duration-1000 ${currentImage === 2 ? "opacity-100" : "opacity-0"}`}
            src={me3}
            alt="Mimi"
          />
        </div>
      </div>
      {/* <div className="mt-5">
      <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg">Projects</button>
      <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">LinkedIn</button>

      </div> */}
      {/* <div className="mt-5">
  <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg mb-4">Projects</button>
  <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">LinkedIn</button>
</div> */}

{/* <div className="mt-5">
  <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg mb-4">Projects</button>
  <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">LinkedIn</button>
</div> */}

{/* <div className="mt-5">
  <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg">Projects</button>
  <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg mt-4">LinkedIn</button>
</div> */}


{/* <div className="mt-5">
  <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg space-x-7">Projects</button>
  <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">LinkedIn</button>
</div> */}


{/* <div className="mt-5">
  <a href="https://food-project-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg space-x-7">
      Projects
    </button>
  </a>
  <a href="https://www.linkedin.com/in/blessing-john-49a97a348/" target="_blank" rel="noopener noreferrer">
    <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">
      LinkedIn
    </button>
  </a>
</div> */}

<div className="mt-5 flex space-x-4">
  <a href="https://food-project-lac.vercel.app/"  target="_blank" rel="noopener noreferrer">
    <button className="text-black border font-bold bg-pink-500 px-5 py-3 rounded-lg">
      Projects
    </button>
  </a>

  <a href="https://www.linkedin.com/in/blessing-john-49a97a348/" target="_blank" rel="noopener noreferrer">
    <button className="text-black border-2 border-black font-bold bg-white px-5 py-3 rounded-lg">
      LinkedIn
    </button>
  </a>
</div>



    </div>
  );
}

export default Coverpage;

