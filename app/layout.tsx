import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ORFEO — Pavel Dranchuk | AI Systems & Operations",
  description:
    "I turn business chaos into systems that scale. AI agents, process automation, and operational leadership across gamedev, medtech, and pharma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[#09090b] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
