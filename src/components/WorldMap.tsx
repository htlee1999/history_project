"use client";

import { useEffect, useState, useMemo } from "react";
import DottedMap from "dotted-map";

// Pre-generate the DottedMap instance outside component to avoid recreation
const map = new DottedMap({ height: 100, grid: "diagonal" });

export function WorldMap() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with system preference to avoid flash
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Simple dark mode detection without next-themes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  // Pre-generate both light and dark SVGs and memoize the data URLs
  const { lightMapUrl, darkMapUrl } = useMemo(() => {
    const lightSvg = map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });
    
    const darkSvg = map.getSVG({
      radius: 0.22,
      color: "#FFFFFF40", 
      shape: "circle",
      backgroundColor: "black",
    });

    return {
      lightMapUrl: `data:image/svg+xml;utf8,${encodeURIComponent(lightSvg)}`,
      darkMapUrl: `data:image/svg+xml;utf8,${encodeURIComponent(darkSvg)}`
    };
  }, []);

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={isDarkMode ? darkMapUrl : lightMapUrl}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
    </div>
  );
}