import woldstadBryllup from "../assets/images/woldstad/bryllup-lave.jpeg";
import Accordion from "../components/Accordion/Accordion";
import ImagePlaceholder from "../components/ImagePlaceholder/ImagePlaceholder";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Seo from "../components/Seo/Seo";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE,
  SERVICE_AREAS,
  SITE_URL,
  SOCIAL_LINKS,
} from "../config/site";
import { gryter, koldtbord, salater, supper, tapasValg } from "../data/menu";
import { cateringTillegg, lokalePriser, servering } from "../data/rental";
import { gaardBilder, rom } from "../data/woldstadfjosetGallery";
import styles from "./Woldstadfjoset.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Woldstadfjoset",
  image: `${SITE_URL}/og-woldstadfjoset.jpg`,
  url: `${SITE_URL}/woldstadfjoset`,
  telephone: BUSINESS_PHONE,
  address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
  servesCuisine: "Norwegian",
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
  sameAs: SOCIAL_LINKS,
};

const PrisListe = ({ items, note }) => (
  <>
    {note && <p className={styles.accordionNote}>{note}</p>}
    <ul className={styles.rettListe}>
      {items.map((item) => (
        <li key={item.navn} className={styles.rett}>
          <span>
            {item.navn}
            {item.info && (
              <span className={styles.rettInfo}> – {item.info}</span>
            )}
          </span>
          <span className={styles.rettPris}>{item.pris}</span>
        </li>
      ))}
    </ul>
  </>
);

const KoldtbordListe = ({ items }) => (
  <div className={styles.koldtbordGrid}>
    {items.map((pakke) => (
      <article key={pakke.navn} className={styles.koldtbordCard}>
        <div className={styles.koldtbordHead}>
          <h4 className={styles.koldtbordName}>{pakke.navn}</h4>
          <span className={styles.koldtbordPris}>{pakke.pris}</span>
        </div>
        <ul className={styles.koldtbordListe}>
          {pakke.innhold.map((del) => (
            <li key={del}>{del}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

const menyAccordion = [
  {
    title: "Koldtbord",
    content: (
      <>
        <p className={styles.accordionNote}>Minimum 10 personer</p>
        <KoldtbordListe items={koldtbord} />
      </>
    ),
  },
  {
    title: "Idas Tapas",
    content: (
      <>
        <p className={styles.accordionNote}>
          Minimum 10 personer · 595 kr pr. person · ca. 700 g pr. person
        </p>
        <p className={styles.accordionText}>
          Serveres med frisk salat med mye godt, focaccia, aioli & chilimajo.
          Velg 7 tilbehør du ønsker:
        </p>
        <ul className={styles.valgGrid}>
          {tapasValg.map((valg) => (
            <li key={valg}>{valg}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Gryter",
    content: (
      <PrisListe
        items={gryter}
        note="Minimum 10 personer · ca. 450 g pr. person"
      />
    ),
  },
  {
    title: "Supper",
    content: (
      <PrisListe
        items={supper}
        note="Minimum 10 personer · ca. 5,5 dl pr. person"
      />
    ),
  },
  {
    title: "Salater",
    content: <PrisListe items={salater} note="Minimum 10 personer" />,
  },
];

const prisAccordion = [
  { title: "Drikke og servering", content: <PrisListe items={servering} /> },
  { title: "Leie av lokaler", content: <PrisListe items={lokalePriser} /> },
  {
    title: "Catering og tillegg",
    content: <PrisListe items={cateringTillegg} />,
  },
];

// Telefonnummer til den som driver Woldstadfjoset - bytt ut med reelt nummer.
const TELEFON = "959 00 208";

const Woldstadfjoset = () => {
  return (
    <div className={styles.wrap}>
      <Seo
        title="Woldstadfjoset"
        description="Woldstadfjoset er en gammel gård i Isfjorden, rett ved Åndalsnes, gjort om til restaurant og selskapslokale, med mat fra Idas Matverden. Book til dåp, bryllup eller annet selskap."
        path="/woldstadfjoset"
        image="/og-woldstadfjoset.jpg"
        jsonLd={jsonLd}
      />

      <header className={styles.hero}>
        <h1 className={styles.title}>Woldstadfjoset</h1>
        <p className={styles.lead}>
          En gammel gård i Isfjorden, rett ved Åndalsnes, gjort om til
          restaurant - med mat fra Idas Matverden. Se meny under, eller book
          hele gården til dåp, bryllup eller annet selskap.
        </p>
      </header>

      <div className={styles.heroImage}>
        <ImageSlider images={gaardBilder} />
      </div>

      {/* --- REDIGER HER --- utfyll/juster med reell info om utleie */}
      <section className={styles.venueSection}>
        <h2 className={styles.sectionTitle}>Om gården</h2>
        <p className={styles.sectionNote}>
          Woldstadfjoset har røtter tilbake til 1600-tallet, med dyrehold på
          gården helt frem til tidlig 90-tall. I dag er det gjort om til
          selskapslokale, med tre ulike rom som passer for både mindre og større
          grupper.
        </p>
      </section>

      <section className={styles.romSection}>
        <div className={styles.romGrid}>
          {rom.map((r) => (
            <article key={r.navn} className={styles.romCard}>
              {r.bilde ? (
                <img
                  src={r.bilde}
                  alt={r.navn}
                  className={styles.romImage}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className={styles.romPlaceholder}>
                  <ImagePlaceholder label={`Bilde av ${r.navn} kommer her`} />
                </div>
              )}
              <h3 className={styles.romTitle}>{r.navn}</h3>
              <p className={styles.romText}>{r.tekst}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.rentalSection}>
        <div className={styles.rentalText}>
          <h2 className={styles.sectionTitle}>Leie hele gården</h2>
          <p className={styles.sectionNote}>
            Woldstadfjoset kan leies til dåp, bryllup og andre større selskap.
            Ta kontakt for pris og ledige datoer.
          </p>
          <PrisListe items={lokalePriser} />
        </div>
        <div className={styles.rentalImageWrap}>
          <img
            src={woldstadBryllup}
            alt="Bryllup ved Woldstadfjoset"
            className={styles.rentalImage}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className={styles.priceSection}>
        <h2 className={styles.sectionTitle}>Priser og leie</h2>
        <Accordion items={prisAccordion} />
      </section>

      <section id="meny" className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Meny</h2>
        <p className={styles.sectionNote}>
          Retter til arrangement, minimum 10 personer per rett.
        </p>
        <Accordion items={menyAccordion} />
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Book</h2>
        <p className={styles.sectionNote}>Booking skjer direkte på telefon.</p>
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

export default Woldstadfjoset;
