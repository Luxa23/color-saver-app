import './App.css';
import styled from 'styled-components';
import { colors } from './db';

const StyledColorCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ backgroundColor = 'hotpink' }) => backgroundColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledColorTag = styled.span`
  background-color: white;
  padding: 0.5rem;
  border-radius: 999px;
`;

function App() {
  return (
    <div className="App">
      <h1>Color Saver</h1>
      {colors.map(color => {
        return (
          <StyledColorCard backgroundColor={color}>
            <StyledColorTag>{color}</StyledColorTag>
          </StyledColorCard>
        );
      })}
    </div>
  );
}

export default App;
