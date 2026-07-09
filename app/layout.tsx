import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaveri Desai | AI & Machine Learning Engineer",
  description: "Portfolio of Kaveri Desai, Artificial Intelligence & Machine Learning Engineer specializing in Generative AI, Computer Vision, and NLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col relative">
        <div className="bg-noise" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
