import "../styles/Header.css";

export default function Header({ headerData }) {
  let { name, email, number, location } = headerData;
  return (
    <div id="resume-header">
      <h1>{name}</h1>
      <p>
        {email} {email && number && "|"} {number} {number && location && "|"}{" "}
        {location}
      </p>
    </div>
  );
}
