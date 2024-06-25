import Link from "next/link";

function TopNav() {
  return (
    <nav
      id="navbar"
      className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-8 py-4 text-base"
    >
      <Link
        href="#home"
        className="mx-auto flex h-14 items-center font-bold md:mx-0"
      >
        Tech Talent Hub
      </Link>
      <ul className="hidden md:flex md:items-center md:gap-4 md:text-xs md:font-semibold">
        <li>
          <Link href="#team">Team</Link>
        </li>
        <li>
          <Link href="#development">Development</Link>
        </li>
        <li>
          <Link href="#register" className="text-center">
            <button className="w-31 h-14">Register</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
