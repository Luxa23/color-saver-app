import { useState } from 'react';
import { COLORS } from './db';

import StyledColorCardWrapper from './components/StyledColorCardWrapper';
import ColorForm from './components/ColorForm';
import ColorCard from './components/ColorCard';

function App() {
  const localStorageValues = JSON.parse(window.localStorage.getItem('hexcode'));
  const [colorList, setColorList] = useState(localStorageValues ?? COLORS);

  return (
    <>
      <h1>Color Saver</h1>
      <StyledColorCardWrapper>
        <ColorForm onSubmit={handleSubmit} />
        {colorList.map(colorObject => {
          return <ColorCard color={colorObject.hexCode}></ColorCard>;
        })}
      </StyledColorCardWrapper>
    </>
  );
  function handleSubmit(newColor) {
    console.log(newColor);
    const newColorList = [newColor, ...colorList];
    localStorage.setItem('hexcode', JSON.stringify(newColorList));
    setColorList(newColorList);
  }
}

export default App;
