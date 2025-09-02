"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  measurementId: string;
}

export function Analytics({ measurementId }: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId]);

  useEffect(() => {
    // Track page views
    if (pathname && window.gtag) {
      window.gtag("config", measurementId, {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname, measurementId]);

  return null;
}

// Custom hook for tracking events
export function useAnalytics() {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: url,
      });
    }
  };

  const trackPerformance = (metric: any) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "web_vitals", {
        event_category: "Web Vitals",
        event_label: metric.name,
        value: Math.round(metric.value),
        non_interaction: true,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackPerformance,
  };
}
