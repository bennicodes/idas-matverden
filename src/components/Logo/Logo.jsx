// Nytt, enklere merke: et fjøs-tak over en fjordlinje.
// Konkret nok til å kjennes igjen som logo, i motsetning til den
// tidligere abstrakte strek-varianten.
const Logo = ({ color = "var(--color-primary)", className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Idas Matverden logo"
      style={{ display: "block" }}
    >
      {/* Fjøs-tak (gavl) */}
      <path
        d="M8 24 L24 10 L40 24"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="24"
        x2="12"
        y2="34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="24"
        x2="36"
        y2="34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Fjordlinje under */}
      <path
        d="M6 38 Q 16 33 24 38 T 42 38"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
