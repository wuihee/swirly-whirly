import { useState } from "react";
import "../styles/ResumeHeader.css";

export default function ResumeHeader() {
  let [formData, setFormData] = useState({
    name: "John",
    email: "john@gmail.com",
    number: "1111 1111",
    location: "Seattle, WA",
  });
  let [links, setLinks] = useState([]);

  function handleInput(event) {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleLinkInput(event) {
    let { value } = event.target;
    setLinks([...links, value]);
  }

  return (
    <div id="header">
      <HeaderForm formData={formData} handleInput={handleInput} />
      <HeaderContent formData={formData} />
    </div>
  );
}

function HeaderContent({ formData }) {
  let { name, email, number, location } = formData;
  return (
    <div id="resume-header">
      <h1>{name}</h1>
      <p>
        {email} | {number} | {location}
      </p>
    </div>
  );
}

function HeaderForm({ formData, handleInput }) {
  return (
    <div>
      {Object.entries(formData).map(([form, value]) => (
        <FormItem
          key={form}
          form={form}
          value={value}
          handleInput={handleInput}
        />
      ))}
    </div>
  );
}

function FormItem({ form, value, handleInput }) {
  return (
    <div>
      <label htmlFor={form}>
        {form.charAt(0).toUpperCase() + form.slice(1)}:{" "}
      </label>
      <input type="text" name={form} value={value} onChange={handleInput} />
    </div>
  );
}

function HeaderLinks({ links, handleLinkInput }) {
  return (
    <div>
      {links.map(link => (
        <a href={link}>{link}</a>
      ))}
    </div>
  );
}
