import { useState } from 'react';

export default function ColorForm({ onSubmit }) {
  const [color, setColor] = useState('#FFCDB2');
  return (
    <form
      action=""
      onSubmit={event => {
        event.preventDefault();
        onSubmit(color);
      }}
    >
      <input type="color" value={color} onChange={handleChange}></input>
      <input type="text" value={color} onChange={handleChange}></input>
      <button type="submit">Add color</button>
    </form>
  );

  function handleChange(event) {
    setColor(event.target.value);
  }
}
