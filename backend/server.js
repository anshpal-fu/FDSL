// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import chatbot routes
const chatbotRoutes = require("./routes/chatbotRoutes");
app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
