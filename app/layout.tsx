import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishadi Wickramaarachchi | Software Engineering Portfolio",
  description:
    "Portfolio of Nishadi Wickramaarachchi, a Software Engineering undergraduate focused on web development, AI, cloud computing, and MLOps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
