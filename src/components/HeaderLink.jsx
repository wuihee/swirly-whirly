import "../styles/HeaderLink.css";

export default function HeaderLink({ links }) {
  return (
    <div id="header-links">
      {links.map((link, index) => (
        <a key={link.id} href={"https://" + link.value} target="_blank">
          {link.value}
          {index < links.length - 1 && " | "}
        </a>
      ))}
    </div>
  );
}
