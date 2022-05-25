import "./Divider.css";

interface DividerProps {
  className?: string;
}

function Divider({ className }: DividerProps) {
  const dividerElementClass = `divider ${className || ""}`.trim();
  return <span className={dividerElementClass} aria-hidden="true"></span>;
}

export default Divider;
