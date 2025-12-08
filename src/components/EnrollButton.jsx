import React from "react";
import { Link } from "react-router-dom";

export default function EnrollButton({ price, fullWidth = false }) {
  return (
    <Link
      to="/admission"
      className={`
        inline-block px-8 py-4
        text-center text-white font-bold rounded-xl
        bg-gradient-to-r from-[#EFAB47] to-[#D4AF37]
        hover:from-[#e6992e] hover:to-[#c29a2e]
        transition-all duration-300 shadow-lg hover:shadow-xl 
        transform hover:-translate-y-1
        text-lg sm:text-xl
        ${fullWidth ? 'w-full' : 'w-full sm:w-auto'}
      `}
    >
      Enroll Now {price ? `for $${price}` : ''}
    </Link>
  );
}