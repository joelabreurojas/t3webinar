import Link from "next/link";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-50">
      <section className="mx-auto flex max-w-md flex-col items-center gap-12 px-8 py-24 text-center text-xs lg:flex lg:max-w-7xl lg:flex-row lg:justify-between lg:text-left">
        <article className="flex flex-col gap-4 text-center lg:gap-8 lg:text-left">
          <p className="text-base font-bold">Tech Talent Hunt</p>
          <p>Get ready for the future with us</p>
          <p>© Copyright 2024, All Rights Reserved</p>
        </article>
        <nav className="flex sm:flex-row sm:flex-nowrap flex-col flex-wrap gap-8">
          <ul className="flex flex-col justify-between gap-4 lg:gap-8">
            <li>
              <p className="font-sm font-semibold">Company</p>
            </li>
            <li>
              <Link href="#home">About</Link>
            </li>
            <li>
              <Link href="#home">Features</Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-between gap-4 lg:gap-8">
            <li>
              <p className="font-sm font-semibold">Quick Links</p>
            </li>
            <li>
              <Link href="#home">Works</Link>
            </li>
            <li>
              <Link href="#home">Testimonials</Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-between gap-4 lg:gap-8">
            <li>
              <p className="font-sm font-semibold">Help</p>
            </li>
            <li>
              <Link href="#home">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#home">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
