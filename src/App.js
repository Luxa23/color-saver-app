import { colors } from './db';
import StyledColorCard from './components/StyledColorCard';

import StyledColorCardWrapper from './components/StyledColorCardWrapper';
import ColorTag from './components/ColorTag';

function App() {
  return (
    <>
      <h1>Color Saver</h1>
      <StyledColorCardWrapper>
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
}

export default App;
