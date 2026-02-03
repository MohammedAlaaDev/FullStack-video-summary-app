import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getMetaData } from "@/data/loaders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const { title, description } = await getMetaData();
  return { title, description };
}

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
