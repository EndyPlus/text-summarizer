export default async function handleCopyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);

    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}
