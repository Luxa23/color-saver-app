import { useState } from 'react';
import { nanoid } from 'nanoid';
import StyledForm from './StyledForm';

export default function ColorForm({ onSubmit }) {
  const [color, setColor] = useState('#FFCDB2');

  return (
    <StyledForm
      action=""
      onSubmit={event => {
        event.preventDefault();
        onSubmit({ id: nanoid(), hexCode: color });
      }}
    >
      <input type="color" value={color} onChange={handleChange}></input>
      <input type="text" value={color} onChange={handleChange}></input>
      <button type="submit">Add color</button>
    </StyledForm>
  );

  function handleChange(event) {
    setColor(event.target.value);
  }
}
