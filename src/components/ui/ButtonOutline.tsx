import { Link } from 'react-router'

type ButtonType = {
  text: string
  link: string
}

const ButtonOutline = ({ text, link }: ButtonType) => {
  return (
    <>
      {/* Dynamic Link and text */}
      <Link
        to={link}
        className='inline-flex items-center justify-center gap-1.5 rounded-full border border-(--white)/25 px-4 py-2.5 text-sm font-semibold text-(--white) transition-colors hover:border-(--primary) hover:bg-slate-50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 cursor-pointer'
      >
        {text}
      </Link>
    </>
  )
}

export default ButtonOutline
