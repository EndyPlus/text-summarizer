import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/features/AuthProvider";
import { PropsLayout } from "../types/types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Text Summarizer",
  description:
    "A simple Text Summarizer application that leverages OpenAI APIs for summarizing user-provided content.",
};

export default function RootLayout({ children }: PropsLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <div id="modal"></div>
          <div id="notification"></div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
