import React from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center mt-16 pt-8">
      <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-40" />

      <p className="mt-6 text-muted-foreground text-sm">
        © {new Date().getFullYear()} Shrikant Gaikwad · Crafted with ❤️ using
        Next.js & TypeScript
      </p>

      <div className="flex justify-center items-center space-x-5 mt-4 text-muted-foreground">
        <Link
          href="https://github.com/shrikantg199"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="GitHub"
        >
          <Image
            src="/social-icon/GitHub.png"
            alt="GitHub"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://linkedin.com/in/shrikant11"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="LinkedIn"
        >
          <Image
            src="/social-icon/Linkedin.png"
            alt="LinkedIn"
            width={20}
            className="rounded-xl"
            height={20}
          />
        </Link>
        <Link
          href="mailto:shrikantg199@gmail.com"
          className="hover:opacity-80 transition-opacity"
          aria-label="Email"
        >
          <Image
            src="/social-icon/Gmail.png"
            alt="Email"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://x.com/its_shri__11"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity "
          aria-label="X"
        >
          <Image
            src="/social-icon/X.png"
            alt="X"
            className="rounded-xl"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href="https://youtube.com/@expocoder?si=h-MoyFPACBBLewF8"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="YouTube"
        >
          <Image
            src="/social-icon/Youtube.png"
            alt="YouTube"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link
        href="#top"
        className="inline-flex items-center justify-center gap-1 mt-6 text-indigo-600 hover:underline text-sm"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" /> Back to top
      </Link>
    </footer>
  );
};

export default Footer;
