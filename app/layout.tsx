import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { PerformanceMonitor } from "@/components/performance-monitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shrikant-portfolio-10.vercel.app"),
  title: "Shrikant Gaikwad – Full Stack Web Developer",
  description:
    "Building fast, scalable, and user‑focused apps with Next.js, React, and Node.js. Portfolio, projects, and experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Web Development",
    "Shrikant Gaikwad",
  ],
  authors: [
    { name: "Shrikant Gaikwad", url: "https://github.com/shrikantg199" },
  ],
  creator: "Shrikant Gaikwad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrikant-portfolio-10.vercel.app",
    title: "Shrikant Gaikwad – Full Stack Web Developer",
    description:
      "Portfolio, projects, and experience. Built with Next.js and TypeScript.",
    siteName: "Shrikant Gaikwad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrikant Gaikwad – Full Stack Web Developer",
    description:
      "Portfolio, projects, and experience. Built with Next.js and TypeScript.",
    creator: "@shrikantg199",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shrikant Gaikwad",
              jobTitle: "Full Stack Web Developer",
              description:
                "Full Stack Web Developer specializing in React, Next.js, and Node.js",
              url: "https://shrikant-portfolio-10.vercel.app",
              sameAs: [
                "https://github.com/shrikantg199",
                "https://linkedin.com/in/shrikant11",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Web Development",
                "Full Stack Development",
              ],
              image: {
                "@type": "ImageObject",
                url: "https://shrikant-portfolio-10.vercel.app/photo.png",
                width: 400,
                height: 400,
              },
            }),
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons handled automatically by app/icon.svg */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceMonitor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
