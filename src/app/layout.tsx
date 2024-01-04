import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "net ninja tutorial serise by Dave Gary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl text-3xl font-bold mt-5 px-10 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
