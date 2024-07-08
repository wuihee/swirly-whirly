import { useState } from "react";
import Header from "./components/Header";
import HeaderForm from "./components/HeaderForm";
import HeaderLink from "./components/HeaderLink";
import HeaderLinkForm from "./components/HeaderLinkForm";
import SectionHeader from "./components/SectionHeader";
import SectionItem from "./components/SectionItem";
import "./styles/App.css";

export default function App() {
  let [headerData, setHeaderData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
  });
  let [headerLinks, setHeaderLinks] = useState([]);

  function handleHeaderInput(event) {
    let { name, value } = event.target;
    setHeaderData({ ...headerData, [name]: value });
  }

  function handleAddLink() {
    setHeaderLinks([...headerLinks, { id: crypto.randomUUID(), value: "" }]);
  }

  function handleLinkInput(id, value) {
    setHeaderLinks(
      headerLinks.map(link =>
        link.id === id ? { id: id, value: value } : link
      )
    );
  }

  function handleDeleteLink(id) {
    setHeaderLinks(headerLinks.filter(link => link.id !== id));
  }

  return (
    <main>
      <section id="form">
        <HeaderForm headerData={headerData} handleInput={handleHeaderInput} />
        <div>
          {headerLinks.map(link => (
            <HeaderLinkForm
              key={link.id}
              link={link}
              handleInput={handleLinkInput}
              handleDelete={handleDeleteLink}
            />
          ))}
          <button onClick={handleAddLink}>Add Link</button>
        </div>
      </section>

      <section id="resume">
        <Header headerData={headerData} />
        <HeaderLink links={headerLinks} />
        <hr />
        <SectionHeader title="Experience" />
        <SectionItem
          title="University of Washington"
          date="Mar. 2024 - Present"
          position="Intern"
          location="Seattle, WA"
        >
          <ul>
            <li>Point 1...</li>
            <li>Point 2...</li>
          </ul>
        </SectionItem>
      </section>
    </main>
  );
}
