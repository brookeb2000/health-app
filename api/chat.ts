import type { VercelRequest, VercelResponse } from '@vercel/node'
import { GoogleGenerativeAI } from '@google/generative-ai'

const SYSTEM_PROMPT = `You are a friendly assistant on Brooke Brocker's personal website.
Answer questions only about Brooke based on the information below.
Keep answers concise and conversational. If asked anything unrelated to Brooke, 
politely say you can only answer questions about her.

--- ABOUT BROOKE ---
Name: Brooke Brocker
Currently: CS Masters Student

Skills:
- Languages: Python, TypeScript, Java, C++, SQL
- Frameworks: React, Node.js, FastAPI, Spring Boot
- Tools: Git, Docker, PostgreSQL, Linux, Figma
- Interests: Machine Learning, Distributed Systems, Web Dev

Projects:
- Health Tracker App: A personal health and fitness tracking app built with React and TypeScript.
- ML Research Project: Applying deep learning to healthcare data for predictive analytics.
- Distributed Cache: A distributed caching system implementing consistent hashing for scalable storage.

Interests & hobbies: Hiking, reading sci-fi, contributing to open source projects.
Open to: Collaborations, internships, and interesting problems.`

/*
 ├── SYSTEM_PROMPT      ← your bio, always sent with every user message
 ├── POST /api/chat     ← receives { message } from your frontend
 ├── validates input    ← rejects bad requests
 ├── reads API key      ← from environment variable, never hardcoded
 ├── calls Gemini       ← gemini-2.0-flash model (fast + free tier)
 └── returns { reply }  ← sends answer back to frontend
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' })
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: SYSTEM_PROMPT,
  })

  const result = await model.generateContent(message)
  const text = result.response.text()

  return res.status(200).json({ reply: text })
}
