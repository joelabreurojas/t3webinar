import "~/styles/globals.css";

import TopNav from "~/components/TopNav";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";

export const metadata = {
  title: "Tech Talent Hub Event | Webinar",
  description: "by j4breu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto w-full">
        <header id="home">
          <TopNav />
          <Hero />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
