import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const aiModel = "gemini-2.5-flash";

const genaiConfig = {
  systemInstruction: `
    Role: Professional Content Synthesizer.
    Task: Condense the input text into a single, high-density paragraph.
    Guidelines:
    Capture the core message, key achievements, and the thematic/emotional tone.
    Style: Start directly with the facts. Strictly forbid introductory phrases like "This text is about..." or "The summary is...".
    Language: Always respond in the same language as the provided input text.
    Constraint: Keep it strictly as one paragraph. Focus on information density (strong verbs, no "fluff").
    Fallback: If the input text is gibberish, nonsensical, or impossible to summarize accurately, return ONLY the following code: [ERROR_INVALID_INPUT].
  `,
  temperature: 0.7,
};

export function getGenaiContent(text: string) {
  return {
    model: aiModel,
    contents: text,
    config: genaiConfig,
  };
}
