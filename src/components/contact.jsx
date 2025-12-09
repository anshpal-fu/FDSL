import React from "react";
import logoImg from "../assets/logo.png";

export default function ConnectWithUs() {
  return (
    <section className="bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-16 px-6 border-b-4 border-[#829494] font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white tracking-wide mb-4">Connect With Us</h2>
          <p className="text-white text-lg max-w-2xl mx-auto opacity-80">
            Have questions or ready to get started? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* LEFT CARD - CONTACT INFORMATION */}
          <div className="bg-[#315262] border border-[#829494] rounded-2xl p-8 shadow-sm">
            <div className="flex justify-center mb-6">
              <img 
                src={logoImg} 
                alt="KLC Freedom Solutions Logo" 
                className="h-15 w-15"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#315262] border border-[#829494] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-white opacity-80">contact@freedomsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#315262] border border-[#829494] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone</h4>
                  <p className="text-white opacity-80">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#315262] border border-[#829494] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Office</h4>
                  <p className="text-white opacity-80">123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD - CONTACT FORM */}
          <div className="bg-[#315262] border border-[#829494] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded-lg focus:ring-2 focus:ring-[#EFAB47] focus:border-[#EFAB47] outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded-lg focus:ring-2 focus:ring-[#EFAB47] focus:border-[#EFAB47] outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded-lg focus:ring-2 focus:ring-[#EFAB47] focus:border-[#EFAB47] outline-none transition"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded-lg focus:ring-2 focus:ring-[#EFAB47] focus:border-[#EFAB47] outline-none transition appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded-lg focus:ring-2 focus:ring-[#EFAB47] focus:border-[#EFAB47] outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn-blue"
              >
                Send Message
              </button>
              
              <a 
                href="/about" 
                className="w-full btn-amber mt-4 inline-block text-center"
              >
                Vision & Mission
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}