import { colors } from './db';
import StyledColorCard from './components/StyledColorCard';
import StyledColorTag from './components/StyledColorTag';
import StyledColorCardWrapper from './components/StyledColorCardWrapper';

function App() {
  return (
    <>
      <h1>Color Saver</h1>
      <StyledColorCardWrapper>
        {colors.map(color => {
          return (
            <StyledColorCard backgroundColor={color}>
              <StyledColorTag>{color}</StyledColorTag>
            </StyledColorCard>
          );
        })}
      </StyledColorCardWrapper>
    </>
  );
}

export default App;
