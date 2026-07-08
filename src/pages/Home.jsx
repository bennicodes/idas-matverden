import { Link } from "react-router-dom";
import bakst from "../assets/images/bakst.jpg";
import cateringImg from "../assets/images/catering-mat.jpg";
import fiskegrateng from "../assets/images/fiskegrateng.jpg";
import ida from "../assets/images/ida.jpg";
import pavlovaImg from "../assets/images/pavlova.jpg";
import sjokokakeImg from "../assets/images/sjokokake.jpg";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import styles from "./Home.module.css";

// --- REDIGER HER ---
// Bytt ut med Idas faktiske tjenester og priser.
// "fra" brukes fordi pris ofte varierer med antall gjester.
const tjenester = [
  {
    navn: "Koldtbord",
    beskrivelse: "Klassisk koldtbord til fest, dåp eller minnestund.",
    pris: "fra 350 kr / person",
  },
  {
    navn: "Varmmat",
    beskrivelse: "Varm middag levert eller servert, tilpasset anledningen.",
    pris: "fra 400 kr / person",
  },
  {
    navn: "Kaker og dessert",
    beskrivelse: "Bløtkake, dessertfat eller kaffebord.",
    pris: "fra 150 kr / person",
  },
];

// --- REDIGER HER --- bilder som roterer i hero-slideren
const heroBilder = [
  {
    src: cateringImg,
    alt: "Koldtbord med reker, spring ruller og tilbehør",
    caption: "",
  },
  {
    src: sjokokakeImg,
    alt: "Sjokoladekake",
    caption: "",
  },
  {
    src: fiskegrateng,
    alt: "Fiskegrateng",
    caption: "",
  },
  {
    src: pavlovaImg,
    alt: "Pavlova kake",
    caption: "",
  },
  {
    src: bakst,
    alt: "Bakst og kaffe",
    caption: "",
  },
];

// Telefonnummer til Ida - bytt ut med reelt nummer.
const TELEFON = "000 00 000";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.heroWrap}>
        <header className={styles.hero}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Idas Matverden</h1>
            <div className={styles.underline}></div>
            <p className={styles.tagline}>
              Måltider som skaper fellesskap og varige minner.
            </p>
          </div>
          <p className={styles.lead}>
            Catering til fest og hverdag i Isfjorden - fra koldtbord til
            bryllupsmiddag, laget med hjerte for anledningen din.
          </p>
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
            <img src={ida} alt="Ida. Eier av idas matverden" />
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Meny og priser</h2>
        <p className={styles.sectionNote}>
          Prisene er veiledende og avhenger av antall gjester og ønsker - ta
          kontakt for et konkret tilbud.
        </p>

        <ul className={styles.menuList}>
          {tjenester.map((t) => (
            <li key={t.navn} className={styles.menuItem}>
              <div className={styles.menuItemHead}>
                <h3 className={styles.menuItemTitle}>{t.navn}</h3>
                <span className={styles.menuItemPrice}>{t.pris}</span>
              </div>
              <p className={styles.menuItemDesc}>{t.beskrivelse}</p>
            </li>
          ))}
        </ul>

        <div className={styles.gallery}>
          <figure className={styles.galleryItem}>
            <img src={pavlovaImg} alt="Pavlova med bær og spiselige blomster" />
            <figcaption>Pavlova med sesongens bær</figcaption>
          </figure>
          <figure className={styles.galleryItem}>
            <img
              src={sjokokakeImg}
              alt="Sjokoladekake med makroner og sjokolade"
            />
            <figcaption>Sjokoladekake til feiring</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.venue}>
        <h2 className={styles.sectionTitle}>Skal du leie et sted?</h2>
        <p className={styles.aboutText}>
          Woldstadfjoset er en gammel gård gjort om til restaurant - perfekt for
          dåp, bryllup og større selskap, med mat fra Idas Matverden.
        </p>
        <Link to="/woldstadfjoset" className={styles.venueLink}>
          Se Woldstadfjoset →
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
