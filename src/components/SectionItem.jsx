import "../styles/SectionItem.css";

export default function SectionItem({
  title,
  position,
  date,
  location,
  children,
}) {
  return (
    <div className="section-item">
      <div className="item-header">
        <h4>{title}</h4>
        <strong>{date}</strong>
      </div>
      <div className="item-subheader">
        <em>{position}</em>
        <em>{location}</em>
      </div>
      {children}
    </div>
  );
}
