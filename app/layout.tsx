import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shrikant-portfolio-10.vercel.app"),
  title: {
    default: "Shrikant Gaikwad | Full Stack Web Developer",
    template: "%s | Shrikant Gaikwad",
  },
  description:
    "Shrikant Gaikwad is a Full Stack Web Developer building fast, scalable, user-focused apps with Next.js, React, Node.js and TypeScript.",
  applicationName: "Shrikant Gaikwad Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  publisher: "Shrikant Gaikwad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrikant-portfolio-10.vercel.app",
    title: "Shrikant Gaikwad | Full Stack Web Developer",
    description:
      "Portfolio featuring full-stack projects, experience, and production-ready engineering work.",
    siteName: "Shrikant Gaikwad Portfolio",
    images: [
      {
        url: "https://shrikant-portfolio-10.vercel.app/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "Shrikant Gaikwad - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrikant Gaikwad | Full Stack Web Developer",
    description:
      "Portfolio featuring full-stack projects, experience, and production-ready engineering work.",
    creator: "@shrikantg199",
    images: ["https://shrikant-portfolio-10.vercel.app/Hero1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://shrikant-portfolio-10.vercel.app/#person",
                  name: "Shrikant Gaikwad",
                  jobTitle: "Full Stack Web Developer",
                  description:
                    "Full Stack Web Developer specializing in React, Next.js, Node.js and TypeScript.",
                  url: "https://shrikant-portfolio-10.vercel.app",
                  sameAs: [
                    "https://github.com/shrikantg199",
                    "https://www.linkedin.com/in/shrikant-gaikwad-dev/",
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
                    url: "https://shrikant-portfolio-10.vercel.app/Hero.jpeg",
                    width: 400,
                    height: 400,
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://shrikant-portfolio-10.vercel.app/#website",
                  url: "https://shrikant-portfolio-10.vercel.app",
                  name: "Shrikant Gaikwad Portfolio",
                  description:
                    "Portfolio of Shrikant Gaikwad, Full Stack Web Developer.",
                  inLanguage: "en-US",
                  publisher: {
                    "@id": "https://shrikant-portfolio-10.vercel.app/#person",
                  },
                },
              ],
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
