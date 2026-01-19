type Props = {
  heading: string;
  text: string;
};

export default function DashboardHeading({ heading, text }: Props) {
  return (
    <div className="mb-5">
      <h3 className="text-heading leading-base tracking-base text-black-base mb-1 font-semibold">
        {heading}
      </h3>
      <p className="leading-base tracking-base text-black-accent text-sm">
        {text}
      </p>
    </div>
  );
}
