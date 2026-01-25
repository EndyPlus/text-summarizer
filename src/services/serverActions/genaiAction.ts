"use server";

import { ai } from "../api/genaiApi";
import { getGenaiContent } from "@/src/config/genaiConfig";

export async function getAiResponse(text: string) {
  const response = await ai.models.generateContent(getGenaiContent(text));

  return response.text;
}
