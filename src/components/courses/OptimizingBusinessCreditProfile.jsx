import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CurriculumSection from "../CurriculumSection";
import EnrollButton from "../EnrollButton";
import course5 from "../../assets/course5.jpg";

const courseData = {
  id: 5,
  slug: "credit-optimization-business",
  title: "Optimizing Business Credit Profile",
  level: "Intermediate",
  duration: "4 weeks",
  price: 500,
  summary: "Strategies for business credit enhancement and optimization.",
  description: "Maximize your business credit potential with our specialized course on business credit optimization. This intermediate-level program provides advanced strategies for enhancing your business credit profile, establishing strong financial foundations, and unlocking better financing opportunities for your enterprise.",
  category: "credit",
  features: ["Credit Building", "Profile Enhancement", "Financing Strategies"],
  imageUrl: course5,
  curriculum: [
    {
      week: "Week 1",
      topics: [
        "Business Credit Fundamentals",
        "Credit Reporting Agencies",
        "Profile Assessment"
      ]
    },
    {
      week: "Week 2",
      topics: [
        "Credit Building Strategies",
        "Vendor Relationships",
        "Payment Optimization"
      ]
    },
    {
      week: "Week 3",
      topics: [
        "Profile Enhancement Techniques",
        "Dispute Resolution",
        "Monitoring Systems"
      ]
    },
    {
      week: "Week 4",
      topics: [
        "Advanced Financing Options",
        "Credit Line Management",
        "Long-term Strategies"
      ]
    }
  ]
};

// Map difficulty levels to colors and labels
const difficultyConfig = {
  'Foundational': { 
    label: 'Beginner', 
    color: 'bg-green-100 text-green-800',
    textColor: 'text-green-600'
  },
  'Intermediate': { 
    label: 'Intermediate', 
    color: 'bg-yellow-100 text-yellow-800',
    textColor: 'text-yellow-600'
  },
  'Advanced': { 
    label: 'Advanced', 
    color: 'bg-red-100 text-red-800',
    textColor: 'text-red-600'
  }
};

export default function OptimizingBusinessCreditProfile() {
  const [openWeek, setOpenWeek] = useState(null);
  
  const difficulty = difficultyConfig[courseData.level] || difficultyConfig['Foundational'];
  
  const toggleWeek = (weekIndex) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back to Courses Button */}
        <div className="mb-6">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-white hover:text-[#EFAB47] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Courses
          </Link>
        </div>
        
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${courseData.imageUrl})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#315262] via-[#315262]/70 to-transparent"></div>
            </div>
            
            {/* Course Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg mb-2">
                    {courseData.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className={`text-sm font-semibold px-3 py-1.5 rounded-full shadow-md ${difficulty.color} flex items-center`}>
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {difficulty.label}
                    </span>
                    <div className="flex items-center text-white text-sm sm:text-base drop-shadow-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {courseData.duration}
                    </div>
                    <div className="flex items-center text-white text-sm sm:text-base drop-shadow-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ${courseData.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course Details */}
          <div className="p-6">
            {/* Short Description */}
            <p className="text-[#444444] text-lg mb-8 leading-relaxed">
              {courseData.description}
            </p>
            
            {/* What You'll Learn */}
            <div className="mb-8">
              <h2 className="font-bold text-[#315262] text-2xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1 mr-3 text-[#EFAB47]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[#444444]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Curriculum */}
            <div className="mb-8">
              <h2 className="font-bold text-[#315262] text-2xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Curriculum
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CurriculumSection curriculumData={courseData.curriculum} />
              </motion.div>
            </div>
            
            {/* Enroll Button */}
            <div className="text-center pt-6">
              <EnrollButton price={courseData.price} />
              <p className="mt-3 text-sm text-[#444444]">
                Secure your spot in this comprehensive course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}