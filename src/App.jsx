import { useState } from "react";
import Header from "./components/Header";
import HeaderForm from "./components/HeaderForm";
import HeaderLink from "./components/HeaderLink";
import HeaderLinkForm from "./components/HeaderLinkForm";
import SectionHeader from "./components/SectionHeader";
import SectionItem from "./components/SectionItem";
import SectionForm from "./components/SectionForm";
import "./styles/App.css";

export default function App() {
  let [headerData, setHeaderData] = useState({
    name: "Your Name",
    email: "Email",
    number: "Phone Number",
    location: "Location",
  });
  let [headerLinks, setHeaderLinks] = useState([]);
  let [sections, setSections] = useState([]);

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

  function handleAddSection() {
    setSections([...sections, { id: crypto.randomUUID(), title: "" }]);
  }
  function handleSectionInput(id, title) {
    setSections(
      sections.map(section =>
        section.id === id ? { id: id, title: title } : section
      )
    );
  }
  function handleDeleteSection(id) {
    setSections(sections.filter(section => section.id !== id));
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

        <div>
          {sections.map(section => (
            <SectionForm
              key={section.id}
              section={section}
              handleInput={handleSectionInput}
              handleDelete={handleDeleteSection}
            />
          ))}
          <button onClick={handleAddSection}>Add Section</button>
        </div>
      </section>

      <section id="resume">
        <Header headerData={headerData} />
        <HeaderLink links={headerLinks} />
        <hr />
        {sections.map(section => (
          <SectionHeader key={section.id} title={section.title} />
        ))}
        {/* <SectionHeader title="Experience" />
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
        </SectionItem> */}
      </section>
    </main>
  );
}
