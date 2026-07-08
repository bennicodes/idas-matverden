import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-idasmatverden.jpg";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Hjem", end: true },
  { to: "/woldstadfjoset", label: "Woldstadfjoset" },
  { to: "/markamyra", label: "Markamyra" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
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
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
