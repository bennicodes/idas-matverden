import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

// Enkel bildeslider - ingen ekstra bibliotek, bare React state og CSS.
// images: [{ src, alt, caption }]
// autoPlayMs: 0 for å skru av autoplay
// aspectRatio: f.eks. "4 / 3" eller "16 / 9"
const ImageSlider = ({
  images,
  autoPlayMs = 4500,
  aspectRatio = "4 / 3",
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex((i + images.length) % images.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoPlayMs) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlayMs]);

  return (
    <div
      className={`${styles.slider} ${className}`}
      style={{ "--slider-aspect": aspectRatio }}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img) => (
            <div className={styles.slide} key={img.src}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Forrige bilde"
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Neste bilde"
        >
          ›
        </button>
      </div>

      <p className={styles.caption} aria-live="polite">
        {images[index].caption}
      </p>

      <div className={styles.dots}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Vis bilde ${i + 1} av ${images.length}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
