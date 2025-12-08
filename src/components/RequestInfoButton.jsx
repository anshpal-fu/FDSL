import React from "react";

export default function RequestInfoButton({ fullWidth = false }) {
  return (
    <a
      href="/about"
      className={`
        btn-blue inline-block px-6 py-3 rounded transition shadow
        ${fullWidth ? 'w-full' : 'w-full sm:w-auto'}
      `}
    >
      Request Info
    </a>
  );
}