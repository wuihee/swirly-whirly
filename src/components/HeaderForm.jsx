export default function HeaderForm({ headerData, handleInput }) {
  return (
    <div>
      {Object.entries(headerData).map(([name, value]) => (
        <FormItem
          key={name}
          name={name}
          value={value}
          handleInput={handleInput}
        />
      ))}
    </div>
  );
}

function FormItem({ name, value, handleInput }) {
  return (
    <div>
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}:{" "}
      </label>
      <input type="text" name={name} value={value} onChange={handleInput} />
    </div>
  );
}
