import React from "react";

export default function ApplyNowButton({ fullWidth = false }) {
  return (
    <a
      href="/admission"
      className={`
        btn-amber inline-block px-6 py-3 rounded transition shadow
        ${fullWidth ? 'w-full' : 'w-full sm:w-auto'}
      `}
    >
      Apply Now
    </a>
  );
}