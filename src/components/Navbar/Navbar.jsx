import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-idasmatverden.jpg";
import { BUSINESS_PHONE } from "../../config/site";
import styles from "./Navbar.module.css";

const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
    />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [wolstadOpen, setWolstadOpen] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setWolstadOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.logo} onClick={closeAll}>
          <span className={styles.logoBadge}>
            <img src={logo} alt="" className={styles.logoImg} />
          </span>
          <span className={styles.logoText}>Idas Matverden</span>
        </NavLink>

        <div className={styles.actions}>
          <a
            href={`tel:${BUSINESS_PHONE}`}
            className={styles.contactButton}
            onClick={closeAll}
          >
            <PhoneIcon className={styles.contactIcon} />
            <span>Kontakt</span>
          </a>

          <button
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="hovedmeny"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>

          <nav
            id="hovedmeny"
            className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              onClick={closeAll}
            >
              Hjem
            </NavLink>

            <div
              className={`${styles.dropdown} ${wolstadOpen ? styles.dropdownOpen : ""}`}
            >
              <div className={styles.dropdownRow}>
                <NavLink
                  to="/woldstad"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.linkActive}`
                      : styles.link
                  }
                  onClick={closeAll}
                >
                  Woldstad
                </NavLink>
                <button
                  type="button"
                  className={styles.dropdownToggle}
                  aria-expanded={wolstadOpen}
                  aria-controls="woldstad-submeny"
                  aria-label={
                    wolstadOpen ? "Lukk undermeny" : "Åpne undermeny"
                  }
                  onClick={() => setWolstadOpen((prev) => !prev)}
                >
                  <span className={styles.chevron} />
                </button>
              </div>

              <div id="woldstad-submeny" className={styles.submenu}>
                <NavLink
                  to="/woldstad#meny"
                  className={styles.submenuLink}
                  onClick={closeAll}
                >
                  Meny
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/markamyra"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              onClick={closeAll}
            >
              Markamyra
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
