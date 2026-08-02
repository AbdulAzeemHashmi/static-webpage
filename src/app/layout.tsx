import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Azeem — Assignment & Project Services | Fast, Reliable & Budget-Friendly",
  description: "Get well-researched student assignments and full-stack coding projects delivered on time with direct Gmail & WhatsApp contact and instant price calculator.",
  keywords: ["Abdul Azeem", "Assignment Services", "Project Services", "Web Development", "Student Support", "Price Calculator", "Codoc IT"],
  authors: [{ name: "Abdul Azeem", url: "https://github.com/AbdulAzeemHashmi" }],
  openGraph: {
    title: "Abdul Azeem — Student Assignment & Tech Project Services",
    description: "Instant price calculator for student assignments & web development projects. Fast delivery, affordable prices, and 24/7 support.",
    url: "https://static-webpage-6mnb563dj-aah18751.vercel.app/",
    siteName: "Abdul Azeem Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Azeem — Assignment & Project Services",
    description: "Fast, reliable, and budget-friendly academic and programming assistance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
