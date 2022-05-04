import { useState } from 'react';
import { COLORS } from './db';
import StyledColorCard from './components/StyledColorCard';
import StyledColorCardWrapper from './components/StyledColorCardWrapper';
import ColorTag from './components/ColorTag';
import ColorForm from './components/ColorForm';

function App() {
  const localStorageValues = JSON.parse(window.localStorage.getItem('hexcode'));
  const [colorList, setColorList] = useState(localStorageValues ?? COLORS);
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
    const newColorList = [newColor, ...colorList];
    localStorage.setItem('hexcode', JSON.stringify(newColorList));
    setColorList(newColorList);
  }
}

export default App;
