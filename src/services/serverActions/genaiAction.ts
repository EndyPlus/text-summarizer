"use server";

import getErrorMessage from "@/src/helpers/utils/getErrorMessage";
import { ai, getGenaiContent } from "../api/genaiApi";

export async function getAiResponse(text: string) {
  try {
    if (!text || typeof text !== "string") {
      throw new Error("Text is invalid or missing.");
    }

    const response = await ai.models.generateContent(getGenaiContent(text));

    console.log(response);

    const generatedText = response.text;

    if (!generatedText) {
      throw new Error("Text generation went wrong.");
    }

    if (generatedText.includes("ERROR_INVALID_INPUT")) {
      throw new Error(
        "Invalid input. Please try to send a different text instead.",
      );
    }

    return { success: true, data: generatedText };
  } catch (err) {
    if (err instanceof Error) {
      const genaiError = JSON.parse(err.message);

      let errorMessage;
      if (genaiError.error.code === 429) {
        errorMessage = "You have reached the limit for text generations.";
      } else {
        errorMessage = "Unknown error.";
      }

      return { success: false, error: errorMessage };
    }

    return { success: false, error: getErrorMessage(err) };
  }
}
