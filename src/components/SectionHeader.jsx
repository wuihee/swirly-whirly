import "../styles/SectionHeader.css";

export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h3>{title.toUpperCase()}</h3>
    </div>
  );
}
