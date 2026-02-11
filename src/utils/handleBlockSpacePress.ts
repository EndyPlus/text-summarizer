export default function handleBlockSpacePress(event) {
  event.target.value = event.target.value.replace(/\s/g, "");
}
