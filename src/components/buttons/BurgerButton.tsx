interface Props {
  isBurgerOpened: boolean;
  onClick: () => void;
}

export default function BurgerButton({ onClick, isBurgerOpened }: Props) {
  const topBurgerElStyles = isBurgerOpened
    ? "rotate-45 translate-y-1.5"
    : "rotate-0 translate-y-0";
  const mediumBurgerElStyles = isBurgerOpened ? "opacity-0" : "";
  const bottomBurgerElStyles = isBurgerOpened
    ? "-rotate-45 -translate-y-1.5"
    : "-rotate-0 -translate-y-0";

  return (
    <button
      onClick={onClick}
      aria-label={isBurgerOpened ? "Close burger menu" : "Open burger menu"}
      className="relative z-901 flex cursor-pointer flex-col justify-center gap-y-0.5 self-center"
    >
      <div className={`burger-element ${topBurgerElStyles}`}></div>
      <div className={`burger-element ${mediumBurgerElStyles}`}></div>
      <div className={`burger-element ${bottomBurgerElStyles}`}></div>
    </button>
  );
}
