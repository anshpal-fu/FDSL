// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "../dist")));

// Import routes
const chatbotRoutes = require("./routes/chatbotRoutes");
const admissionRoutes = require("./routes/admission");

// Use routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api", admissionRoutes);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));