/**
 *  Used for handling errors in try/catch blocks.
 *
 * @param {unknown} error  Error param with unknown type.
 * @return {string}  An error's object message or error itself if it is a string.
 */

export default function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;

  if (typeof error === "string") return error;

  return "An unexpected error occurred";
}
