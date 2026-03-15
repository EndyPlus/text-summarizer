/**
 * @returns A words and characters counts.
 */
export default function getCounts(str: string) {
  const value = str.trim();

  const charactersCount: number = value.length;
  const wordsCount: number = value
    .split(" ")
    .filter((v: string) => v.length).length;

  return { charactersCount, wordsCount };
}
