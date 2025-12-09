import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-new", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/plans", label: "Plans" },
    { to: "/admission", label: "Admission" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#315262]/90 backdrop-blur-lg shadow-lg border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between">
          
          {/* LOGO + TITLES */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="KLC Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
            />
            
            {/* Desktop Name */}
            <span className="text-white font-bold text-base sm:text-lg md:text-xl hidden md:block">
              KLC FREEDOM SOLUTIONS LLC
            </span>
            
            {/* Mobile Name */}
            <span className="text-white font-bold text-lg md:hidden">
              KFSLCC
            </span>
          </NavLink>
          
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-7 h-1 bg-white rounded"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-1 bg-white rounded"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-7 h-1 bg-white rounded"
            />
          </button>
        </div>
        
        {/* MOBILE NAV */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#315262] px-6 py-4 space-y-4 border-t border-white/10"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-white text-lg py-2 ${
                      isActive ? "font-semibold underline" : "opacity-90"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}