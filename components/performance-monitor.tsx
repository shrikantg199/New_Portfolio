"use client";

import { usePerformanceMonitoring } from "@/hooks/use-performance";

export function PerformanceMonitor() {
  usePerformanceMonitoring();

  // This component doesn't render anything, it just initializes performance monitoring
  return null;
}
