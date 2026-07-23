import { Link } from "react-router-dom";
import ida from "../assets/images/ida-inngang.jpg";
import pavlovaImg from "../assets/images/idasMatverden/pavlova.jpg";
import sjokokakeImg from "../assets/images/idasMatverden/sjokokake.jpg";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Seo from "../components/Seo/Seo";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE,
  SERVICE_AREAS,
  SITE_URL,
  SOCIAL_LINKS,
} from "../config/site";
import { heroBilder } from "../data/homeHeroImages";
import styles from "./Home.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CateringBusiness",
  name: "Idas Matverden",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
  sameAs: SOCIAL_LINKS,
};

// Telefonnummer til Ida - bytt ut med reelt nummer.
const TELEFON = "959 00 208";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Seo
        title="Idas Matverden"
        description="Idas Matverden leverer catering til fest og hverdag i Isfjorden - koldtbord, varmmat og dessert laget med hjerte for anledningen din."
        path="/"
        jsonLd={jsonLd}
      />

      <div className={styles.heroWrap}>
        <header className={styles.hero}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Idas Matverden</h1>
            <div className={styles.underline}></div>
            <p className={styles.tagline}>
              Lager mat med kjærlighet til alle anledninger.
            </p>
          </div>
        </header>

        <div className={styles.heroImage}>
          <ImageSlider images={heroBilder} className={styles.heroImageFrame} />
        </div>
      </div>

      {/* --- REDIGER HER --- kort tekst om Ida selv */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>Om Ida</h2>
        <div className={styles.aboutWrap}>
          <div className={styles.aboutTextWrap}>
            <p className={styles.aboutText}>
              Ida driver Idas Matverden og lager mat til alt fra minnestunder og
              dåp til bursdager og bryllup.
            </p>
            <p className={styles.aboutText}>
              Ta kontakt for en uforpliktende prat om hva som passer for din
              anledning.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={ida}
              alt="Ida. Eier av idas matverden"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Meny og priser</h2>
        <p className={styles.sectionNote}>
          Prisene er veiledende og avhenger av antall gjester og ønsker - ta
          kontakt for et konkret tilbud.
        </p>

        <Link to="/woldstad#meny" className={styles.callButton}>
          Se hele menyen →
        </Link>

        <div className={styles.gallery}>
          <figure className={styles.galleryItem}>
            <img
              src={pavlovaImg}
              alt="Pavlova med bær og spiselige blomster"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Pavlova med sesongens bær</figcaption>
          </figure>
          <figure className={styles.galleryItem}>
            <img
              src={sjokokakeImg}
              alt="Sjokoladekake med makroner og sjokolade"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sjokoladekake til feiring</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.venue}>
        <h2 className={styles.sectionTitle}>Skal du leie et sted?</h2>
        <p className={styles.aboutText}>
          Woldstad er en gammel gård gjort om til restaurant - perfekt for dåp,
          bryllup og større selskap, med mat fra Idas Matverden.
        </p>
        <Link to="/woldstad" className={styles.venueLink}>
          Se Woldstad →
        </Link>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Book</h2>
        <p className={styles.sectionNote}>
          Booking skjer direkte med Ida på telefon.
        </p>
        <a
          className={styles.callButton}
          href={`tel:${TELEFON.replace(/\s/g, "")}`}
        >
          Ring {TELEFON}
        </a>
      </section>
    </div>
  );
};

export default Home;
