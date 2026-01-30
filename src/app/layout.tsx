import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/features/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

console.log(inter.className);

export const metadata: Metadata = {
  title: "Text Summarizer",
  description:
    "A simple Text Summarizer application that leverages OpenAI APIs for summarizing user-provided content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
