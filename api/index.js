// This file is for Vercel serverless deployment
import { app, initializeApp } from '../dist/index.js';

// Initialize the app once
let initialized = false;

export default async function handler(req, res) {
  // Initialize on first request
  if (!initialized) {
    await initializeApp();
    initialized = true;
  }
  
  // Handle the request
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}