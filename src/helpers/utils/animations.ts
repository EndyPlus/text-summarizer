// default animation config
const animationOptions: KeyframeAnimationOptions = {
  duration: 200,
  easing: "ease-out",
  fill: "forwards",
};

/**
 * Animating Auth notifications.
 * @param {HTMLElement} el An HTML element.
 * @param {string} mode Can be "appear" or "disapper" only.
 * @returns An animation object for getting a finish state.
 */
export function animationAuthNotify(
  el: HTMLElement | null,
  mode: "appear" | "disappear",
) {
  if (el === null) return;

  let keyframes;
  switch (mode) {
    case "appear":
      keyframes = [
        { transform: "translateY(-5rem)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ];
      break;
    case "disappear":
      keyframes = [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-5rem)", opacity: 0 },
      ];
      break;
  }

  return el.animate(keyframes, animationOptions);
}

/**
 * Animating Dashboard notifications.
 * @param {HTMLElement} el An HTML element.
 * @param {string} mode Can be "appear" or "disapper" only.
 * @returns An animation object for getting a finish state.
 */
export function animationDashboardNotify(
  el: HTMLElement | null,
  mode: "appear" | "disappear",
) {
  if (el === null) return;

  const width = window.innerWidth;

  // xmd - custom tailwind breakpoint (globals.css)
  const isXmd = width >= 928;

  let keyframes;
  switch (mode) {
    case "appear":
      keyframes = [
        {
          transform: `${isXmd ? "translateY(-5rem)" : "translateY(3rem)"}`,
          opacity: 0,
        },
        {
          transform: "translateY(0)",
          opacity: 1,
        },
      ];
      break;
    case "disappear":
      keyframes = [
        { transform: "translateY(0)", opacity: 1 },
        {
          transform: `${isXmd ? "translateY(-5rem)" : "translateY(3rem)"}`,
          opacity: 0,
        },
      ];
      break;
  }

  return el.animate(keyframes, animationOptions);
}

/**
 * Animating modal window and modal background.
 * @param {HTMLElement} modalEl An HTML element which is a modal window.
 * @param {HTMLElement} bgEl An HTML element which is a modal background.
 * @param {string} mode Can be "appear" or "disapper" only.
 * @returns An animation object for getting a finish state.
 */
export function animationModal(
  modalEl: HTMLElement | null,
  bgEl: HTMLElement | null,
  mode: "appear" | "disappear",
) {
  if (modalEl === null || bgEl === null) return;

  let modalKeyframes;
  let bgKeyframes;
  switch (mode) {
    case "appear":
      modalKeyframes = [
        { transform: "translateY(-10rem)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ];
      bgKeyframes = [{ opacity: 0 }, { opacity: 1 }];
      break;
    case "disappear":
      modalKeyframes = [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(10rem)", opacity: 0 },
      ];
      bgKeyframes = [{ opacity: 1 }, { opacity: 0 }];
      break;
  }

  bgEl.animate(bgKeyframes, {
    ...animationOptions,
    duration: 300,
  });

  // since window and bg have same duration, it returns only one of them for simplicity
  return modalEl.animate(modalKeyframes, {
    ...animationOptions,
    duration: 300,
  });
}

/**
 * Animating mobile navigation.
 * @param {HTMLElement} el An HTML element.
 * @param {string} mode Can be "appear" or "disapper" only.
 * @returns An animation object for getting a finish state.
 */
export function animationMobileNav(
  el: HTMLElement | null,
  mode: "appear" | "disappear",
) {
  if (el === null) return;

  let keyframes;
  switch (mode) {
    case "appear":
      keyframes = [
        { transform: "translateY(-2rem)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ];
      break;
    case "disappear":
      keyframes = [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-2rem)", opacity: 0 },
      ];
      break;
  }

  return el.animate(keyframes, animationOptions);
}
