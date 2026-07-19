import woldstadBryllup from "../assets/images/woldstad/bryllup.jpeg";
import woldstadDrivhus from "../assets/images/woldstad/drivhus-woldstad.jpg";
import woldstadFjos from "../assets/images/woldstad/gård.jpg";
import sauefjøset from "../assets/images/woldstad/sauefjøset.png";
import silostua from "../assets/images/woldstad/silostua.png";
import woldstadUtsikt from "../assets/images/woldstad/utsikt-fjord.jpg";
import vørstadloftet from "../assets/images/woldstad/vørstadloftet.jpg";
import woldstadInngang from "../assets/images/woldstad/woldstad-inngang.jpg";
import woldstadResturantFjos from "../assets/images/woldstad/woldstad-resturant.jpg";
import woldstadGård from "../assets/images/woldstad/woldstadfjoset-ute.jpg";
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

// --- REDIGER HER --- prislister for meny og utleie. Grupper etter kategori
// slik at det blir oversiktlig når listene vokser.

const tapasValg = [
  "Spicy kjøttboller i tomatsaus & parmesan",
  "Dadler i bacon",
  "Biffspyd med teriyakimarinade",
  "Kyllingvinger i bbq",
  "Baconrullet kyllingfilet med pesto",
  "Kyllingspyd i red curry eller bbq",
  "Ovnsbakte poteter",
  "Spekemat- og ostefat med bær & frukt, sylte fra Woldstad Gård",
  "Mini våruller",
  "Tempura scampi",
  "Hvitløksmarinert scampi",
  "Lefseruller med laks eller spekeskinke",
  "Vannmelonsalat",
  "Brokkolisalat",
  "Pæresalat med blåmuggost & honning",
  "Pai",
  "Chorizo",
  "Dirty potet med ostesaus, bacon, vårløk og parmesan",
  "Mini slider med coleslaw",
  "Edamamebønner med olje & salt",
  "Baconsnurret asparges",
  "Pastasalat",
  "Butter chicken",
  "Kebab med potetpuré, spicy saus og ost",
  "Caprese med balsamico & basilikum",
  "Fylt vaffel med røkt laks & rogn",
  "Asian style ribbe",
  "Pulled pork",
  "Rekecocktail",
  "Dirty tacokjøtt med mørbrad",
  "Fylte terter",
  "Mini pølse",
  "Tomatsalsa & guacamole",
];

const gryter = [
  {
    navn: "Stroganoffgryte",
    info: "med ris, salat, focaccia, smør & dressing",
    pris: "395 kr",
  },
  {
    navn: "Kyllinggryte",
    info: "med ris, salat, focaccia, smør & dressing",
    pris: "395 kr",
  },
  {
    navn: "Viltgryte",
    info: "med stappe, ovnsbakte grønnsaker med honning og tyttebær",
    pris: "495 kr",
  },
  {
    navn: "Biffgryte",
    info: "med stappe, salat, focaccia, smør & dressing",
    pris: "445 kr",
  },
  { navn: "Bacalao", info: "med brød, salat og smør", pris: "445 kr" },
  { navn: "Boeuf bourguignon", info: "med stappe", pris: "395 kr" },
  { navn: "Lapskaus", info: "med flatbrød og tyttebær", pris: "325 kr" },
  {
    navn: "Hjemmelaget lasagne",
    info: "med focaccia, salat og hvitløksdressing",
    pris: "395 kr",
  },
];

const supper = [
  { navn: "Kyllingsuppe", info: "med focaccia og smør", pris: "295 kr" },
  {
    navn: "Spicy søtpotetsuppe",
    info: "med bacon, parmesan og focaccia",
    pris: "255 kr",
  },
  {
    navn: "Kjøttsuppe",
    info: "med focaccia, flatbrød, aioli og sylte fra gården",
    pris: "295 kr",
  },
];

const salater = [
  {
    navn: "Pastasalat",
    info: "med skinke, kylling, kebab, bacon, focaccia og smør",
    pris: "279 kr",
  },
  { navn: "Brokkolisalat", info: "med focaccia og smør", pris: "279 kr" },
  { navn: "Vannmelonsalat", info: "med spekeskinke", pris: "279 kr" },
  { navn: "Reke- og laksesalat", pris: "289 kr" },
];

const servering = [
  {
    navn: "Velkomstdrink",
    info: "uten / med alkohol",
    pris: "79 / 95 kr pr. pers.",
  },
  { navn: "Kaffe", pris: "45 kr pr. stk." },
  { navn: "Dessert", pris: "139 kr pr. stk." },
  {
    navn: "Medbrakte kaker",
    info: "tillegg for leie av utstyr og oppvask",
    pris: "65 kr pr. pers.",
  },
  { navn: "Drikkepakke", info: "3 enheter", pris: "369 kr pr. pers." },
];

const lokalePriser = [
  {
    navn: "Leie av lokalet",
    info: "inkl. enkel pynting, vasking, omplassering av møblement, oppdekning av bord, lys og servietter. Ved bryllup, dåp og lignende kommer vi til enighet.",
    pris: "2 999 kr",
  },
  { navn: "Sauefjøset", pris: "1 000 kr" },
  { navn: "Vørstaloftet", pris: "3 500 kr" },
];

const cateringTillegg = [
  { navn: "Kjøring ved catering", info: "avtales", pris: "fra 300 kr" },
  { navn: "Leie av Ida til arrangement", pris: "fra 750 kr" },
];

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

const menyAccordion = [
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

// --- REDIGER HER --- legg til flere bilder av gården etter hvert som de blir tilgjengelig
const gaardBilder = [
  {
    src: woldstadFjos,
    alt: "Woldstadfjoset restaurant i gammelt fjøs",
    caption: "",
  },
  {
    src: woldstadGård,
    alt: "Woldstad gård",
    caption: "",
  },
  {
    src: woldstadUtsikt,
    alt: "Uteplass med utsikt mot fjorden",
    caption: "",
  },
  {
    src: woldstadDrivhus,
    alt: "Drivhus og uteplass ved inngangen til fjøset",
    caption: "",
  },
  {
    src: woldstadInngang,
    alt: "Inngang til fjøset",
    caption: "",
  },
];

// --- REDIGER HER --- statiske bilder, ikke slider. Bytt bilde: null til en
// import når dere har egne bilder av Silostua og Sauefjøset.
const rom = [
  {
    navn: "Fjøset",
    bilde: woldstadResturantFjos,
    tekst:
      "Tidligere sto det 25 melkekyr her - nå er fjøset et innbydende selskapslokale og restaurant. Kan brukes hele året og rommer opptil 80 personer.",
  },
  {
    navn: "Silostua",
    bilde: silostua,
    tekst:
      "Koselig peisestue med sitteplass til rundt 15 personer - en fin plass å trekke seg tilbake til etter et godt måltid.",
  },
  {
    navn: "Sauefjøset",
    bilde: sauefjøset,
    tekst:
      "Det nyeste lokalet, for grupper på 10-20 personer. Intimt og koselig, kan også brukes som møterom.",
  },
  {
    navn: "Vørstadloftet",
    bilde: vørstadloftet,
    tekst:
      "Her har vi hatt ulike arrangement som konserter og dans med god stemning utover seinsommer og høst.",
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
