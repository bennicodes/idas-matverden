import logo from "../assets/images/logo-idasmatverden.jpg";
import Seo from "../components/Seo/Seo";
import styles from "./Markamyra.module.css";

const Markamyra = () => {
  return (
    <div className={styles.wrap}>
      <Seo
        title="Markamyra"
        description="Markamyra - mer informasjon kommer snart."
        path="/markamyra"
        noindex
      />

      <h1 className={styles.title}>Markamyra</h1>
      <p className={styles.text}>
        Her kommer det snart mer informasjon. Følg med.
      </p>
      {/*
        Når innholdet er klart: bygg denne siden etter samme mal som
        IdasMatverden.jsx eller Woldstadfjoset.jsx - egen meny/tjeneste-liste
        øverst i filen, samme seksjonsoppsett, book-knapp med tel:-lenke.
      */}
      <div className={styles.logoWrap}>
        <img src={logo} alt="Idas matverden logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Markamyra;
