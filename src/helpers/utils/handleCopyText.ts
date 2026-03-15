import getErrorMessage from "./getErrorMessage";

function handleCopyMobile(text: string) {
  // creating a text area, setting up attributes and making it invisible
  const mobileTextarea = document.createElement("textarea");
  mobileTextarea.setAttribute("id", "mobileClipboard");
  mobileTextarea.setAttribute("aria-hidden", "true");
  mobileTextarea.setAttribute("tabindex", "-1");
  mobileTextarea.style.position = "fixed";
  mobileTextarea.style.opacity = "0";

  // adding to body
  document.body.prepend(mobileTextarea);

  // copying a text into textarea, focusing and selecting a text
  mobileTextarea.value = text;
  mobileTextarea.focus();
  mobileTextarea.select();

  // executing copy command, unfocusing and removing an element from a DOM.
  document.execCommand("copy");
  mobileTextarea.blur();
  mobileTextarea.remove();
}

/**
 * Handles copying a text to clipboard.
 *
 * Also has a fallback method if navigator.clipboard is not available.
 *
 * @returns A Promise which if resolved returns an object
 * with a status (success: true/false) and if error also has an error string..
 */
export default async function handleCopyText(text: string) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      handleCopyMobile(text);
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}
