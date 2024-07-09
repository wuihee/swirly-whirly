import "../styles/SectionForm.css";

export default function SectionForm({ section, handleInput, handleDelete }) {
  let { id, value } = section;
  return (
    <div className="section-form">
      <input
        type="text"
        value={value}
        onChange={e => handleInput(id, e.target.value)}
      />
      <button onClick={() => handleDelete(id)}>Del</button>
    </div>
  );
}
