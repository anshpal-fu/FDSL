// routes/chatbotRoutes.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  // Temporary response (later replace with actual chatbot logic)
  res.json({
    reply: `You said: ${message}`
  });
});

module.exports = router;
