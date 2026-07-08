import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Idas Matverden · Isfjorden · {new Date().getFullYear()}</p>
      <a
        href="https://bentoweb.no/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.credit}
      >
        Nettside av Bentoweb
      </a>
    </footer>
  );
};

export default Footer;
