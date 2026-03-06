import getErrorMessage from "./getErrorMessage";

export default async function handleCopyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);

    return { success: true };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}
