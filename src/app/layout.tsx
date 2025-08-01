import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "AOK Smart Living Website",
  description:
    "Official website of AOK Limited – revolutionizing Nigerian homes with smart control, monitoring, and automation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links for better browser support */}
        <link rel="icon" type="image/png" sizes="32x32" href="/aok-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/aok-logo.png" />
        <link rel="apple-touch-icon" href="/aok-logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
