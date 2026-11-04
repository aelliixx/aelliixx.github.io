import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aelliixx.com"),
  title: "Donatas Mockus",
  description:
    "Donatas Mockus is a full-stack web developer and software engineer from Lithuania, building websites, games, and compilers with Next.js, TypeScript, Unreal Engine and C++.",
  openGraph: {
    title: "Donatas Mockus",
    description:
      "Websites, MMO-RPGs and compilers, from Lithuania. Full-stack web developer, Unreal Engine game developer, C++ engineer.",
    url: "https://aelliixx.com",
    siteName: "Donatas Mockus",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efefe9" },
    { media: "(prefers-color-scheme: dark)", color: "#10141a" },
  ],
};

// Applies the stored (or system) theme before first paint, avoiding a flash.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${bricolage.variable} ${plex.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="bg-flow" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
          <span className="blob blob-d" />
          <span className="blob blob-e" />
        </div>
        {children}
      </body>
    </html>
  );
}
