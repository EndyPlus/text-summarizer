const animationOptions: KeyframeAnimationOptions = {
  duration: 200,
  easing: "ease-out",
  fill: "forwards",
};

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

  return modalEl.animate(modalKeyframes, {
    ...animationOptions,
    duration: 300,
  });
}

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
