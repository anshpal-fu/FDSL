import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.route.js";   // make sure file name is singular

const app = express();

app.use(cors({
  origin: "*", // allow all — change later for security
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Health Check (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
