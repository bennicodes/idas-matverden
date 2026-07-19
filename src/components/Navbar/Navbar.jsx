import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-idasmatverden.jpg";
import styles from "./Navbar.module.css";

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
                to="/woldstadfjoset"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.linkActive}`
                    : styles.link
                }
                onClick={closeAll}
              >
                Woldstadfjoset
              </NavLink>
              <button
                type="button"
                className={styles.dropdownToggle}
                aria-expanded={wolstadOpen}
                aria-controls="woldstadfjoset-submeny"
                aria-label={
                  wolstadOpen ? "Lukk undermeny" : "Åpne undermeny"
                }
                onClick={() => setWolstadOpen((prev) => !prev)}
              >
                <span className={styles.chevron} />
              </button>
            </div>

            <div id="woldstadfjoset-submeny" className={styles.submenu}>
              <NavLink
                to="/woldstadfjoset#meny"
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
    </header>
  );
};

export default Navbar;
