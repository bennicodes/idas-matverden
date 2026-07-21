import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const isPageReload = () => {
  const [entry] = performance.getEntriesByType("navigation");
  return entry?.type === "reload";
};

const useScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      if (hash && isPageReload()) {
        window.history.replaceState(null, "", pathname);
        window.scrollTo(0, 0);
        return;
      }
    }

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
};

export default useScrollToTop;
