"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onLCP, onTTFB } from "web-vitals";
import type { Metric } from "web-vitals";

export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Cumulative Layout Shift (CLS)
      onCLS((metric: Metric) => {
        console.log("CLS:", metric);
        // Send to analytics service
        if (process.env.NODE_ENV === "production") {
          // Send to Google Analytics if available
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: metric.name,
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        }
      });

      // First Contentful Paint (FCP)
      onFCP((metric: Metric) => {
        console.log("FCP:", metric);
        if (process.env.NODE_ENV === "production") {
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: metric.name,
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        }
      });

      // Largest Contentful Paint (LCP)
      onLCP((metric: Metric) => {
        console.log("LCP:", metric);
        if (process.env.NODE_ENV === "production") {
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: metric.name,
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        }
      });

      // Time to First Byte (TTFB)
      onTTFB((metric: Metric) => {
        console.log("TTFB:", metric);
        if (process.env.NODE_ENV === "production") {
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: metric.name,
              value: Math.round(metric.value),
              non_interaction: true,
            });
          }
        }
      });

      // Monitor long tasks
      if ("PerformanceObserver" in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.duration > 50) {
                console.warn("Long task detected:", entry);
                if (process.env.NODE_ENV === "production" && window.gtag) {
                  window.gtag("event", "long_task", {
                    event_category: "Performance",
                    event_label: "Long Task",
                    value: Math.round(entry.duration),
                    non_interaction: true,
                  });
                }
              }
            }
          });
          observer.observe({ entryTypes: ["longtask"] });
        } catch (e) {
          console.warn("PerformanceObserver not supported:", e);
        }
      }

      // Monitor memory usage (if available)
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        };
        
        console.log("Memory usage:", memoryUsage);
        
        if (process.env.NODE_ENV === "production" && window.gtag) {
          window.gtag("event", "memory_usage", {
            event_category: "Performance",
            event_label: "Memory Usage",
            value: memoryUsage.used,
            custom_parameters: {
              total_mb: memoryUsage.total,
              limit_mb: memoryUsage.limit,
            },
          });
        }
      }
    }
  }, []);
}

// Utility function to measure component render time
export function useRenderTime(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time:`, renderTime.toFixed(2) + "ms");
      
      if (renderTime > 16.67) { // 60fps threshold
        console.warn(`${componentName} took longer than 16.67ms to render`);
        
        // Track slow renders in production
        if (process.env.NODE_ENV === "production" && window.gtag) {
          window.gtag("event", "slow_render", {
            event_category: "Performance",
            event_label: componentName,
            value: Math.round(renderTime),
            non_interaction: true,
          });
        }
      }
    };
  });
}

// Utility function to measure function execution time
export function measurePerformance<T extends (...args: any[]) => any>(
  fn: T,
  name: string
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    
    const executionTime = end - start;
    console.log(`${name} execution time:`, executionTime.toFixed(2) + "ms");
    
    // Track slow function executions in production
    if (executionTime > 100 && process.env.NODE_ENV === "production" && window.gtag) {
      window.gtag("event", "slow_function", {
        event_category: "Performance",
        event_label: name,
        value: Math.round(executionTime),
        non_interaction: true,
      });
    }
    
    return result;
  }) as T;
}
