// routes/admission.js
const express = require("express");
const router = express.Router();

// Handle info request submissions
router.post("/info", (req, res) => {
  const { name, email, interest, query } = req.body;
  
  // Log the submission (in a real app, you would save this to a database)
  console.log("Info Request Submitted:", { name, email, interest, query });
  
  // Send a success response
  res.status(200).json({ 
    message: "Info request received successfully", 
    data: { name, email, interest } 
  });
});

// Handle application submissions
router.post("/apply", (req, res) => {
  const { name, email, phone, course, experience, query } = req.body;
  
  // Log the submission (in a real app, you would save this to a database)
  console.log("Application Submitted:", { name, email, phone, course, experience, query });
  
  // Send a success response
  res.status(200).json({ 
    message: "Application received successfully", 
    data: { name, email, phone, course } 
  });
});

module.exports = router;