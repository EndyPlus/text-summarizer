import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
  children: React.ReactNode;
};
export default function HomeCtaButton({ src, alt, children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-border rounded-large flex cursor-pointer flex-col items-center justify-center border px-7.5 py-4.5"
    >
      <Image src={src} alt={alt} width={24} height={24} />
      <p className="text-small mt-1.25 leading-[195%] font-medium text-[#131615]">
        {children}
      </p>
    </button>
  );
}
