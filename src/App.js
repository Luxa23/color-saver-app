import { useState } from 'react';
import { colors } from './db';
import StyledColorCard from './components/StyledColorCard';
import StyledColorCardWrapper from './components/StyledColorCardWrapper';
import ColorTag from './components/ColorTag';

function ColorForm({ onSubmit }) {
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

function App() {
  const [colorList, setColorList] = useState(colors);
  return (
    <>
      <h1>Color Saver</h1>
      <StyledColorCardWrapper>
        <ColorForm onSubmit={handleSubmit} />
        {colors.map(color => {
          return (
            <StyledColorCard backgroundColor={color}>
              <ColorTag color={color}>{color}</ColorTag>
            </StyledColorCard>
          );
        })}
      </StyledColorCardWrapper>
    </>
  );
  function handleSubmit(newColor) {
    setColorList([newColor, ...colorList]);
  }
}

export default App;
