import ImagePlaceholder from "../components/ImagePlaceholder/ImagePlaceholder";
import styles from "./Woldstadfjoset.module.css";

// --- REDIGER HER ---
// Bytt ut med den faktiske menyen. Grupper etter kategori
// slik at det blir oversiktlig når listen vokser.
const meny = [
  {
    kategori: "Forrett",
    retter: [{ navn: "Dagens suppe", pris: "125 kr" }],
  },
  {
    kategori: "Hovedrett",
    retter: [
      { navn: "Fjøsgryte", pris: "285 kr" },
      { navn: "Dagens fisk", pris: "295 kr" },
    ],
  },
  {
    kategori: "Dessert",
    retter: [{ navn: "Rømmegrøt med tilbehør", pris: "125 kr" }],
  },
];

// Telefonnummer til den som driver Woldstadfjoset - bytt ut med reelt nummer.
const TELEFON = "959 00 208";

const Woldstadfjoset = () => {
  return (
    <div className={styles.wrap}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Woldstadfjoset</h1>
        <p className={styles.lead}>
          En gammel gård i Isfjorden, gjort om til restaurant - med mat fra Idas
          Matverden. Se meny under, eller book hele gården til dåp, bryllup
          eller annet selskap.
        </p>
      </header>

      <div className={styles.heroImage}>
        <ImagePlaceholder label="Bilde av gården/lokalet kommer her" />
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

      <section className={styles.venueSection}>
        <h2 className={styles.sectionTitle}>Leie hele gården</h2>
        <p className={styles.sectionNote}>
          Woldstadfjoset kan leies til dåp, bryllup og andre større selskap. Ta
          kontakt for pris og ledige datoer.
        </p>
      </section>

      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Meny</h2>

        {meny.map((gruppe) => (
          <div key={gruppe.kategori} className={styles.kategori}>
            <h3 className={styles.kategoriTitle}>{gruppe.kategori}</h3>
            <ul className={styles.rettListe}>
              {gruppe.retter.map((rett) => (
                <li key={rett.navn} className={styles.rett}>
                  <span>{rett.navn}</span>
                  <span className={styles.rettPris}>{rett.pris}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Book bord</h2>
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
