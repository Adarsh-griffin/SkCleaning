import { Request, Response } from "express";

export const handleDemo = (req: Request, res: Response) => {
  res.json({
    message: "SK Cleaning Services API Demo",
    status: "success",
    timestamp: new Date().toISOString(),
    endpoints: {
      health: "/api/health",
      leads: "/api/leads",
      demo: "/api/demo"
    }
  });
};
