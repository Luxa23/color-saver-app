import { useState } from 'react';
import { COLORS } from './db';
import StyledColorCard from './components/StyledColorCard';
import StyledColorCardWrapper from './components/StyledColorCardWrapper';
import ColorTag from './components/ColorTag';
import ColorForm from './components/ColorForm';

function App() {
  const [colorList, setColorList] = useState(COLORS);
  return (
    <>
      <h1>Color Saver</h1>
      <StyledColorCardWrapper>
        <ColorForm onSubmit={handleSubmit} />
        {colorList.map(color => {
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
