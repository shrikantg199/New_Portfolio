"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

// Inline icons to avoid bundling lucide-react
const IconMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 12h18" />
    <path d="M3 6h18" />
    <path d="M3 18h18" />
  </svg>
);
const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);
const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </svg>
);
const IconUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-3.5 4.4-5 8-5s6.5 1.5 8 5" />
  </svg>
);
const IconSpark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
  </svg>
);
const IconBriefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);
const IconFolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
);
const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const navItems = [
  { name: "Home", href: "#home", icon: IconHome },
  { name: "About", href: "#about", icon: IconUser },
  { name: "Skills", href: "#skills", icon: IconSpark },
  { name: "Experience", href: "#experience", icon: IconBriefcase },
  { name: "Projects", href: "#projects", icon: IconFolder },
  { name: "Contact", href: "#contact", icon: IconMail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const lastScrollYRef = useRef(0);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrollingDown = currentY > lastScrollYRef.current;
          const beyondThreshold = currentY > 80;
          const isDesktopOrLarger = window.innerWidth >= 768;

          const shouldHide =
            isDesktopOrLarger &&
            isScrollingDown &&
            beyondThreshold &&
            !isMobileMenuOpen;
          setIsHidden(shouldHide);

          lastScrollYRef.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  // Observe section visibility to highlight active nav link
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{ transform: `translateY(${isHidden ? "-100%" : "0"})` }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "md:bg-background/80 md:backdrop-blur-md md:border-b md:shadow-sm bg-white dark:bg-black"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary transition-transform duration-200 hover:scale-105">
            Shrikant Gaikwad
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative inline-block ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#2563eb] dark:text-[#2563eb]"
                      : "hover:text-[#2563eb] dark:hover:text-[#2563eb]"
                  }`}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}
                >
                  {item.name}
                </a>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2563eb] origin-left w-full transition-transform duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <IconMenu className="w-[22px] h-[22px] text-foreground" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 md:hidden bg-white dark:bg-black h-screen z-[100]"
            >
              <motion.div
                initial={{ y: -12, opacity: 0.96 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0.96 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="h-full w-full"
              >
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-5 right-5 p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <IconX className="w-[22px] h-[22px] text-slate-900" />
                </button>

                <div className="h-full w-full flex flex-col items-start justify-start px-6 pt-24 pb-8">
                  <div className="w-full flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.04 * index }}
                        className={`text-xl text-slate-900 dark:text-slate-100  font-semibold tracking-wide transition-colors ${
                          activeSection === item.href.replace("#", "")
                            ? "text-[#2563eb]"
                            : "hover:text-[#2563eb]"
                        }`}
                        onClick={() => {
                          setActiveSection(item.href.replace("#", ""));
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="inline-flex items-center gap-2">
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                  <div className="mt-auto text-sm text-slate-500">
                    © {new Date().getFullYear()} Shrikant Gaikwad
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
