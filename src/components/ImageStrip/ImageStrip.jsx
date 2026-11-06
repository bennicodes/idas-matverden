import { useEffect, useRef, useState } from "react";
import styles from "./ImageStrip.module.css";

// Bildestripe man sveiper sidelengs i - neste bilde stikker fram i kanten,
// så det er tydelig at det finnes flere. Ingen autoplay.
// Pilene vises bare på skjermer med mus (på mobil sveiper man).
// images: [{ src, alt, caption }]
const ImageStrip = ({ images, label }) => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  // Blar ett bilde om gangen
  const scroll = (direction) => {
    const el = trackRef.current;
    const item = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = item ? item.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step });
  };

  return (
    <section className={styles.strip} aria-label={label}>
      <ul
        className={styles.track}
        role="list"
        ref={trackRef}
        onScroll={updateEdges}
      >
        {images.map((img, i) => (
          <li className={styles.item} key={img.src}>
            <figure className={styles.figure}>
              <img
                src={img.src}
                alt={img.alt}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scroll(-1)}
          disabled={atStart}
          aria-label="Forrige bilde"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scroll(1)}
          disabled={atEnd}
          aria-label="Neste bilde"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ImageStrip;
