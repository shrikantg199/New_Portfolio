"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },

  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
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

          // Hide on scroll down beyond threshold for desktop only; show on scroll up or when menu is open
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
      // Ensure nav is visible on small screens
      if (window.innerWidth < 768) {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    // Run once on mount to ensure correct state based on current viewport
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
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // bias towards section near center
        threshold: [0.15, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "md:bg-background/80 md:backdrop-blur-md md:border-b md:shadow-sm bg-white dark:bg-black"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary"
          >
            Shrikant Gaikwad
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredNav(item.name)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <motion.a
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative inline-block ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#2563eb] dark:text-[#2563eb]"
                      : "hover:text-[#2563eb] dark:hover:text-[#2563eb]"
                  }`}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
                {/* Running line effect only on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5  bg-[#2563eb] origin-left w-full"
                  initial={false}
                  animate={{ scaleX: hoveredNav === item.name ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden  flex items-center space-x-2">
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

        {/* Mobile Navigation - Fullscreen overlay sliding from right */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 md:hidden bg-white dark:bg-black z-[100]"
          >
            {/* Close button inside overlay */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full bg-muted/60 hover:bg-muted transition-colors"
            >
              <IconX className="w-[22px] h-[22px] text-foreground" />
            </button>

            <div className="h-full w-full flex flex-col items-start justify-start px-6 pt-24 pb-8">
              <div className="w-full flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-xl light:text-black dark:text-white font-semibold tracking-wide transition-colors ${
                      activeSection === item.href.replace("#", "")
                        ? "text-[#2563eb] dark:text-[#2563eb]"
                        : "hover:text-[#2563eb] dark:hover:text-[#2563eb]"
                    }`}
                    onClick={() => {
                      setActiveSection(item.href.replace("#", ""));
                      setIsMobileMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto text-sm text-muted-foreground">
                © {new Date().getFullYear()} Shrikant Gaikwad
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
