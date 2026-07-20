import bryllupSkilt from "../assets/images/woldstad/bryllup-skilt.JPEG";
import woldstadDrivhus from "../assets/images/woldstad/drivhus-woldstad.jpg";
import woldstadFjos from "../assets/images/woldstad/gard.jpg";
import sauefjøset from "../assets/images/woldstad/sauefjoset.png";
import silostua from "../assets/images/woldstad/silostua.png";
import woldstadUtsikt from "../assets/images/woldstad/utsikt-fjord.jpg";
import vørstadloftet from "../assets/images/woldstad/vørstadloftet.jpg";
import woldstadInngang from "../assets/images/woldstad/woldstad-inngang.jpg";
import woldstadResturantFjos from "../assets/images/woldstad/woldstad-resturant.jpg";
import woldstadGård from "../assets/images/woldstad/woldstadfjoset-ute.jpg";

// --- REDIGER HER --- legg til flere bilder av gården etter hvert som de blir tilgjengelig
export const gaardBilder = [
  {
    src: bryllupSkilt,
    alt: "Skilt til bryllup på Wolstad",
    caption: "",
  },
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
    navn: "Vørstadloftet",
    bilde: vørstadloftet,
    tekst:
      "Her har vi hatt ulike arrangement som konserter og dans med god stemning utover seinsommer og høst.",
  },
];
