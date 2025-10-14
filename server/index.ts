import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

export const app = express();

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://static.hsappstatic.net",
          "https://replit.com",
        ],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://meetings-eu1.hubspot.com"],
        frameSrc: ["'self'", "https://meetings-eu1.hubspot.com"],
      },
    },
    crossOriginEmbedderPolicy: false, // Allow HubSpot meeting embeds
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Initialize the app
let serverInstance: any;

export async function initializeApp() {
  if (serverInstance) return serverInstance;

  serverInstance = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Only setup vite in development
  if (app.get("env") === "development") {
    await setupVite(app, serverInstance);
  } else {
    serveStatic(app);
  }

  return serverInstance;
}

// Start server only if not running in Vercel
if (process.env.VERCEL !== "1") {
  (async () => {
    const server = await initializeApp();

    const port = process.env.PORT || 3000;
    server.listen(Number(port), "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });
  })();
}
