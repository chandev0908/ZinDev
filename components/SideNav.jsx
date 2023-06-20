import Link from "next/link";

export default function SideNav() {
  return (
    <div className="sidenav w-full font-medium text-2xl bg-transparent overflow-hidden absolute z-30">
      <ul className="grid grid-flow-col grid-cols-auto justify-items-center items-center gap-12 w-fit p-7 md:grid-flow-row">
        <li className="w-fit md:-rotate-90">
          <Link
            href={"https://github.com/chandev0908"}
            className="transition duration-500 hover:text-primary-hover"
          >
            GH
          </Link>
        </li>
        <li className="w-fit md:-rotate-90">
          <Link
            href={"https://www.linkedin.com/in/christian-dalagan-b791651b6/"}
            className="transition duration-500 hover:text-primary-hover"
          >
            LI
          </Link>
        </li>
        <li className="w-fit">
          <div className="block w-28 h-0.5 bg-black md:w-0.5 md:h-48 justify-self-center"></div>
        </li>
      </ul>
    </div>
  );
}
