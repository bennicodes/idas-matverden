import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.title} className={styles.item}>
            <button
              type="button"
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
              <div className={styles.panelInner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
