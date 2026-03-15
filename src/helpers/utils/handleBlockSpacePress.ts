import { ChangeEvent } from "react";

export default function handleBlockSpacePress(
  event: ChangeEvent<HTMLInputElement>,
) {
  // \s - all kinds of whitespace
  event.target.value = event.target.value.replace(/\s/g, "");
}
