import { ChangeEvent } from "react";

export default function handleBlockSpacePress(
  event: ChangeEvent<HTMLInputElement>,
) {
  event.target.value = event.target.value.replace(/\s/g, "");
}
