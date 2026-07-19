import styles from "./Footer.module.css";

// --- REDIGER HER --- bytt ut med Idas faktiske Facebook- og Instagram-lenker.
const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61577159744214&locale=nb_NO";
const INSTAGRAM_URL = "https://www.instagram.com/idas_matverden/";

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35C16.24 4.31 15.36 4.24 14.33 4.24c-2.15 0-3.63 1.31-3.63 3.72v2.08H8v3h2.7V21z"
    />
  </svg>
);

const InstagramIcon = ({ className, gradientId }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    {gradientId && (
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f9ce34" />
          <stop offset="35%" stopColor="#ee2a7b" />
          <stop offset="100%" stopColor="#6228d7" />
        </linearGradient>
      </defs>
    )}
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      fill="none"
      stroke={gradientId ? `url(#${gradientId})` : "currentColor"}
      strokeWidth="1.8"
    />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      fill="none"
      stroke={gradientId ? `url(#${gradientId})` : "currentColor"}
      strokeWidth="1.8"
    />
    <circle
      cx="17.2"
      cy="6.8"
      r="1.1"
      fill={gradientId ? `url(#${gradientId})` : "currentColor"}
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.info}>
          <p className={styles.text}>
            Idas Matverden · Isfjorden · {new Date().getFullYear()}
          </p>
          <a
            href="https://bentoweb.no/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credit}
          >
            Nettside av Bentoweb
          </a>
        </div>

        <div className={styles.socialsBlock}>
          <p className={styles.socialsLabel}>Følg oss</p>

          <div className={styles.socials}>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <span className={styles.iconWrap}>
                <FacebookIcon className={styles.iconDefault} />
                <FacebookIcon
                  className={`${styles.iconColor} ${styles.facebookColor}`}
                />
              </span>
              <span className={styles.tooltip}>Facebook</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <span className={styles.iconWrap}>
                <InstagramIcon className={styles.iconDefault} />
                <InstagramIcon
                  className={styles.iconColor}
                  gradientId="instagramGradient"
                />
              </span>
              <span className={styles.tooltip}>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
