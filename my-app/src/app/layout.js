import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../shared/layout/Header";
import Footer from "../../shared/layout/Footer";
import { Suspense } from 'react';
import GlobalSpinner from "../../shared/ui/Spinner";
import meta from "../../shared/constants/metadata";

export const metadata = meta;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex flex-col items-center w-full h-screen mt-4 relative`}>
        <Header/>
        <main className="flex-grow mb-10">
        <Suspense fallback={<GlobalSpinner />}>
                {children}
        </Suspense>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
