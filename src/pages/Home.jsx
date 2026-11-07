import { Link } from "react-router-dom";
import ida from "../assets/images/ida.jpg";
import pavlovaImg from "../assets/images/idasMatverden/pavlova.jpg";
import sjokokakeImg from "../assets/images/idasMatverden/sjokokake.jpg";
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
        title="Catering i Isfjorden"
        description="Idas Matverden leverer catering til fest og hverdag i Isfjorden - koldtbord, varmmat og dessert laget med hjerte for anledningen din."
        path="/"
        jsonLd={jsonLd}
      />

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Mat laget med <em>kjærlighet</em>, til alle anledninger
          </h1>
          <div className={styles.heroActions}>
            <a
              className={styles.callButton}
              href={`tel:${TELEFON.replace(/\s/g, "")}`}
            >
              Ring {TELEFON}
            </a>
            <Link to="/woldstad#meny" className={styles.heroLink}>
              Se menyen →
            </Link>
          </div>
        </div>

        <div className={styles.collage}>
          {heroBilder.map((bilde, i) => (
            <figure
              key={bilde.src}
              className={`${styles.photo} ${styles[`photo${i + 1}`]}`}
            >
              <img
                src={bilde.src}
                alt={bilde.alt}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
              />
              <figcaption>{bilde.caption}</figcaption>
            </figure>
          ))}
        </div>
      </header>

      {/* --- REDIGER HER --- Idas egen tekst om seg selv */}
      <section className={styles.about} aria-labelledby="om-meg">
        <div className={styles.portrait}>
          <img
            src={ida}
            alt="Ida, som driver Idas Matverden"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.letter}>
          <h2 id="om-meg" className={styles.letterTitle}>
            Litt om meg
          </h2>
          <p className={styles.greeting}>
            Så utrolig koselig at du har funnet veien hit til min lille
            matverden!
          </p>
          <p>
            Jeg heter Ida, og jeg har en stor kjærlighet for matlaging, gode
            smaker og alt det fine som skjer når mennesker samles rundt et bord.
            Jeg elsker å lage mat og søte fristelser som kan spre glede, varme og
            små øyeblikk å ta vare på.
          </p>
          <p>
            Hos Idas Matverden tilbyr jeg catering, selskapsmat og bakst til
            både små og store anledninger.
          </p>
          <p>
            For meg er det viktig at det jeg lager kommer fra hjertet. Hver
            eneste bestilling får litt ekstra kjærlighet, omtanke og personlig
            preg.
          </p>
          <p>
            Det er en stor glede å få bidra til dine små og store feiringer, og
            jeg håper jeg får lage noe godt til nettopp deg!
          </p>
          <p className={styles.signoff}>
            Med masse kjærlighet,
            <span className={styles.signature}>Ida</span>
          </p>
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
          Woldstad er en gammel gård i Isfjorden gjort om til restaurant -
          perfekt for dåp, bryllup og større selskap, med mat fra Idas
          Matverden.
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
