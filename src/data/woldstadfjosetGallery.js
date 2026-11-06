import bryllupSkilt from "../assets/images/woldstad/bryllup-skilt.jpg";
import woldstadDrivhus from "../assets/images/woldstad/drivhus-woldstad.jpg";
import woldstadFjos from "../assets/images/woldstad/gard.jpg";
import pizzahus from "../assets/images/woldstad/pizzahus.jpg";
import sauefjøset from "../assets/images/woldstad/sauefjoset.jpg";
import silostua from "../assets/images/woldstad/silostua.jpg";
import woldstadUtsikt from "../assets/images/woldstad/utsikt-fjord.jpg";
import vørstadloftet from "../assets/images/woldstad/vørstadloftet.jpg";
import woldstadInngang from "../assets/images/woldstad/woldstad-inngang.jpg";
import woldstadResturantFjos from "../assets/images/woldstad/woldstad-resturant.jpg";
import woldstadGård from "../assets/images/woldstad/woldstadfjoset-ute.jpg";

// --- REDIGER HER --- bildene i stripen øverst på Woldstad-siden.
// caption vises under hvert bilde.
export const gaardBilder = [
  {
    src: bryllupSkilt,
    alt: "Skilt til bryllup på Woldstad",
    caption: "Bryllup på Woldstad",
  },
  {
    src: woldstadFjos,
    alt: "Woldstad restaurant i gammelt fjøs",
    caption: "Fjøset ved fjorden",
  },
  {
    src: woldstadGård,
    alt: "Woldstad gård",
    caption: "Gårdstunet",
  },
  {
    src: woldstadUtsikt,
    alt: "Uteplass med utsikt mot fjorden",
    caption: "Uteplassen mot fjorden",
  },
  {
    src: woldstadDrivhus,
    alt: "Drivhus og uteplass ved inngangen til fjøset",
    caption: "Orangeriet",
  },
  {
    src: woldstadInngang,
    alt: "Inngang til fjøset",
    caption: "Inngangen til fjøset",
  },
];

// --- REDIGER HER --- statiske bilder, ikke slider. Bytt bilde: null til en
// import når dere har egne bilder av Silostua og Sauefjøset.
export const rom = [
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
    navn: "Vørstaloftet",
    bilde: vørstadloftet,
    tekst:
      "Her har vi hatt ulike arrangement som konserter og dans med god stemning utover seinsommer og høst.",
  },
  {
    navn: "Orangeriet",
    bilde: [
      { src: pizzahus, alt: "Pizzahus med steinovn ved Orangeriet" },
      { src: woldstadDrivhus, alt: "Drivhus med sitteplasser og drinker" },
    ],
    tekst:
      "Perfekt for grupper på 10-20 personer. Benytt dere av pizzahuset og nyt sommerstemning med drinker.",
  },
];
