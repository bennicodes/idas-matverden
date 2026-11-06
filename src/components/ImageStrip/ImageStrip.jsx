import { useEffect, useRef, useState } from "react";
import styles from "./ImageStrip.module.css";

// Bildestripe for gården.
// - Mus (desktop): glir rolig i en uendelig loop. Pauser når musepekeren er
//   over bildene, og pauseknappen stopper den helt.
// - Touch, eller "reduser bevegelse" skrudd på: vanlig stripe man sveiper i,
//   der neste bilde stikker fram i kanten.
// images: [{ src, alt, caption }]

// Sekunder per bilde i loopen - høyere tall gir roligere tempo
const SEKUNDER_PER_BILDE = 7;

const LOOP_QUERY =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const useLoopMode = () => {
  const [loop, setLoop] = useState(
    () => typeof window !== "undefined" && window.matchMedia(LOOP_QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(LOOP_QUERY);
    const onChange = () => setLoop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return loop;
};

const Bilde = ({ img, eager, hidden }) => (
  <li className={styles.item} aria-hidden={hidden || undefined}>
    <figure className={styles.figure}>
      <img
        src={img.src}
        alt={hidden ? "" : img.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  </li>
);

const ImageStrip = ({ images, label }) => {
  const loop = useLoopMode();
  const [paused, setPaused] = useState(false);
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
    if (loop) return;
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [loop]);

  // Blar ett bilde om gangen (statisk stripe med mus)
  const scroll = (direction) => {
    const el = trackRef.current;
    const item = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = item ? item.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step });
  };

  if (loop) {
    return (
      <section
        className={`${styles.strip} ${paused ? styles.paused : ""}`}
        aria-label={label}
      >
        <div className={styles.viewport}>
          <ul
            className={styles.loop}
            role="list"
            style={{
              "--loop-duration": `${images.length * SEKUNDER_PER_BILDE}s`,
            }}
          >
            {images.map((img) => (
              <Bilde key={img.src} img={img} eager />
            ))}
            {/* Kopi av bildene så loopen går sømløst - skjult for skjermlesere */}
            {images.map((img) => (
              <Bilde key={`kopi-${img.src}`} img={img} eager hidden />
            ))}
          </ul>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Spill av bildene" : "Pause bildene"}
          >
            {paused ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.iconFilled}
              >
                <path d="M8 5.5v13l10.5-6.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5.5v13M15 5.5v13" />
              </svg>
            )}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.strip} aria-label={label}>
      <ul
        className={styles.track}
        role="list"
        ref={trackRef}
        onScroll={updateEdges}
      >
        {images.map((img, i) => (
          <Bilde key={img.src} img={img} eager={i < 2} />
        ))}
      </ul>

      {/* Pilene vises bare med mus - på touch sveiper man */}
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
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
          className={styles.control}
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
