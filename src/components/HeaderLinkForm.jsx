export default function HeaderLinkForm({ link, handleInput, handleDelete }) {
  let { id, value } = link;
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => handleInput(id, e.target.value)}
      />
      <button onClick={() => handleDelete(id)}>Del</button>
    </div>
  );
}
