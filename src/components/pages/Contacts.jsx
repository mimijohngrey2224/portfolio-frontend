// import React from 'react'

// function Contacts() {
//   return (
//     <div>
//         <div className='mt-10 text-center'>
//             <h1 className='font-bold text-2xl'>Email</h1>
//             <p className='text-2xl'>mimihairofficial@gmail.com</p>
//             <p className='text-2xl'>mimijohngrey@outlook.com</p>
//         </div>
//         <div className='text-center mt-10'>
//             <h1 className='font-bold text-2xl'>WhatsApp</h1>
//             <p className='text-2xl'>+234 8038901148</p>
//             <p className='text-2xl'>+234 8185580707</p>
//         </div>
//     </div>
//   )
// }

// export default Contacts

import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";

function Contacts() {
  return (
    <div className="bg-gray-50 py-10">
      {/* Contact Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
        {/* Email Section */}
        {/* <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center justify-center">
            <TfiEmail className="mr-3 text-3xl" /> Contact Us via Email
          </h1>
          <p className="text-xl text-gray-700 mb-2">mimihairofficial@gmail.com</p>
          <p className="text-xl text-gray-700">mimijohngrey@outlook.com</p>
        </div> */}

        {/* Email Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center justify-center">
            <TfiEmail className="mr-3 text-3xl" /> Contact Us via Email
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            <a href="mailto:mimihairofficial@gmail.com" className="text-blue-600 hover:underline">mimihairofficial@gmail.com</a>
          </p>
          <p className="text-xl text-gray-700">
            <a href="mailto:mimijohngrey@outlook.com" className="text-blue-600 hover:underline">mimijohngrey@outlook.com</a>
          </p>
        </div>


        {/* WhatsApp Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-green-600 mb-4 flex items-center justify-center">
            <BsWhatsapp className="mr-3 text-3xl" /> Contact Us via WhatsApp
          </h1>
          <p className="text-xl text-gray-700 mb-2">+234 8038901148</p>
          <p className="text-xl text-gray-700">+234 8185580707</p>
        </div>

        {/* Phone Section */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-red-600 mb-4 flex items-center justify-center">
            <MdAddIcCall className="mr-3 text-3xl" /> Contact Us via Phone
          </h1>
          <p className="text-xl text-gray-700 mb-2">+234 8038901148</p>
          <p className="text-xl text-gray-700">+234 8185580707</p>
        </div>

      </div>

      {/* Footer Section */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">We are here to assist you. Feel free to reach out anytime!</p>
      </div>
    </div>
  );
}

export default Contacts;



