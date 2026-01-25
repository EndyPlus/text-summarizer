const aiModel = "gemini-2.5-flash";

const genaiConfig = {
  systemInstruction: `Role: Professional Summarizer.
  Task: Condense the input text into a single, high-quality paragraph that captures the essence, key achievements, and emotional/thematic core.
  Output: Reduce as much as possible with saved general text purpose.
  `,
};

export function getGenaiContent(text: string) {
  return {
    model: aiModel,
    contents: text,
    config: genaiConfig,
  };
}
