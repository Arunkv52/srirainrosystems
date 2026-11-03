import { Link } from "react-router";

type ButtonLinksProps = {
  text: string;
  link: string;
};

const ButtonFill = ({ text, link }: ButtonLinksProps) => {
  return (
    <Link
      to={link}
      className="inline-flex cursor-pointer items-center justify-center rounded-full bg-(--blue) px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
    >
      {text}
    </Link>
  );
};

export default ButtonFill;