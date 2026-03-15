"use server";

import { ai, getGenaiContent } from "../api/genaiApi";

import getErrorMessage from "@/src/helpers/utils/getErrorMessage";

export async function getAiResponse(text: string) {
  try {
    if (!text || typeof text !== "string") {
      throw new Error("Text is invalid or missing.");
    }

    const response = await ai.models.generateContent(getGenaiContent(text));

    const generatedText = response.text;

    if (!generatedText) {
      throw new Error("Text generation went wrong.");
    }

    // spotting a special fallback code which was provided to AI in instructions.
    if (generatedText.includes("ERROR_INVALID_INPUT")) {
      throw new Error(
        "Invalid input. Please try to send a different text instead.",
      );
    }

    return { success: true, data: generatedText };
  } catch (err) {
    if (err instanceof Error) {
      // parsing returned JSON from GenAI
      const genaiError = JSON.parse(err.message);
      // getting an error code
      const errorCode = genaiError.error.code;

      let errorMessage;
      if (errorCode === 429) {
        errorMessage = "You have reached the limit for text generations.";
      } else {
        errorMessage = "Unknown error.";
      }

      return { success: false, error: errorMessage };
    }

    return { success: false, error: getErrorMessage(err) };
  }
}
