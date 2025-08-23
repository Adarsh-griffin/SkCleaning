import "dotenv/config";
import express from "express";
import cors from "cors";
import leadsRouter from "./server/routes/leads.js";
import { handleDemo } from "./server/routes/demo.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "SK Cleaning Services API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get("/api/demo", handleDemo);
app.use("/api", leadsRouter);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : "Something went wrong"
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 SK Cleaning API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/`);
  console.log(`🔗 API base: http://localhost:${PORT}/api`);
});

export default app;
