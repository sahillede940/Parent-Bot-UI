import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyRuntimeProvider } from "@/app/MyRuntimeProvider";
import Home from "@/app/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parent Bot",
  description: "A chatbot for parents to help with their general queries and concerns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en">
        <body className={`dark ${inter.className}`}>
          <Home />
        </body>
      </html>
    </MyRuntimeProvider>
  );
}
