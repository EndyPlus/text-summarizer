interface Props {
  burgerState: boolean;
  onClick: () => void;
}

export default function BurgerButton({ onClick, burgerState }: Props) {
  return (
    <button
      onClick={onClick}
      className="items flex cursor-pointer flex-col gap-y-0.5 self-center"
    >
      <div className="h-1 w-7 bg-white"></div>
      <div className="h-1 w-7 bg-white"></div>
      <div className="h-1 w-7 bg-white"></div>
    </button>
  );
}
