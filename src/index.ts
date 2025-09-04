import "dotenv/config";
import express from "express";
import corsMiddleware from "./api/middleware/cors";
import contactRouter from "./api/contact";

const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Setup CORS logic
app.use(corsMiddleware);

app.use("/api/contact", contactRouter);

export default app;

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
}
