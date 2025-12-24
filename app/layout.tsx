import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arshida | Interior Designer",
    template: "%s | Arshida Interior Design",
  },
  description:
    "Arshida is a professional interior designer crafting elegant, modern, and functional spaces. Explore residential, commercial, and minimalist interior projects.",
  keywords: [
    "Interior Designer",
    "Interior Design Portfolio",
    "Residential Interior Design",
    "Commercial Interior Design",
    "Minimalist Interiors",
    "Arshida Interior Designer",
  ],
  authors: [{ name: "Arshida" }],
  creator: "Arshida",
  openGraph: {
    title: "Arshida | Interior Designer",
    description:
      "Explore elegant and modern interior design projects by Arshida. Specializing in residential, commercial, and minimalist interiors.",
    url: "https://arshida-designer.vercel.app",
    siteName: "Arshida Interior Design",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 800,
        alt: "Arshida Interior Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshida | Interior Designer",
    description:
      "Elegant interior design portfolio by Arshida. Residential, commercial & minimalist spaces.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
