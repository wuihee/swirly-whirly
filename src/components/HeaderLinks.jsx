import { useState } from "react";
import "../styles/HeaderLinks.css";

export default function HeaderLinks() {
  let [links, setLinks] = useState([{ id: 1, value: "" }]);

  function handleAddLink() {
    setLinks([...links, { id: crypto.randomUUID(), value: "" }]);
  }

  function handleChange(id, newValue) {
    setLinks(
      links.map(link => (link.id === id ? { id: id, value: newValue } : link))
    );
  }

  function deleteLink(id) {
    setLinks(links.filter(link => link.id !== id));
  }

  return (
    <div id="header-links">
      <div id="link-container">
        {links.map(link => (
          <LinkInput
            key={link.id}
            id={link.id}
            value={link.value}
            onChange={handleChange}
            deleteLink={deleteLink}
          />
        ))}
        <button onClick={handleAddLink}>Add Link</button>
      </div>
      <LinksDisplay links={links} />
    </div>
  );
}

function LinkInput({ id, value, onChange, deleteLink }) {
  return (
    <div className="link">
      <input
        type="text"
        value={value}
        onChange={e => onChange(id, e.target.value)}
      />
      <button onClick={() => deleteLink(id)}>Del</button>
    </div>
  );
}

function LinksDisplay({ links }) {
  return (
    <div id="links-display">
      {links.map(link => (
        <p key={link.id}>{link.value}</p>
      ))}
    </div>
  );
}
