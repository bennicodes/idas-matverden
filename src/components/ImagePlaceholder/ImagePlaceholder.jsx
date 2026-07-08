import styles from "./ImagePlaceholder.module.css";

// Midlertidig bilde-plass med riktig format og myk tekstur, til ekte
// bilder fra Facebook-siden er klare. Når bildet finnes, erstatt med:
// <img src="/bilder/navn.jpg" alt="..." className={styles.frame} />
//
// aspect: "landscape" (16:9) eller "square" (1:1)
const ImagePlaceholder = ({ label, aspect = "landscape" }) => {
  return (
    <div
      className={`${styles.frame} ${aspect === "square" ? styles.square : styles.landscape}`}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
