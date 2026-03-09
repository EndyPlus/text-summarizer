import getErrorMessage from "./getErrorMessage";

function handleCopyMobile(text: string) {
  const mobileTextarea = document.createElement("textarea");
  mobileTextarea.setAttribute("id", "mobileClipboard");
  mobileTextarea.setAttribute("aria-hidden", "true");
  mobileTextarea.setAttribute("tabindex", "-1");

  document.body.prepend(mobileTextarea);

  mobileTextarea.value = text;
  mobileTextarea.focus();
  mobileTextarea.select();
  document.execCommand("copy");
  mobileTextarea.blur();
  mobileTextarea.remove();
}

export default async function handleCopyText(text: string) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      // throw new Error("SOSI MOBILE XUI");
      handleCopyMobile(text);
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}
