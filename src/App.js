import './App.css';
import styled from 'styled-components';
import { colors } from './db';

const StyledColorCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ backgroundColor = 'hotpink' }) => backgroundColor};
  border-radius: 15px;
`;

function App() {
  return (
    <div className="App">
      <h1>Color Saver</h1>
      {colors.map(color => {
        return <StyledColorCard backgroundColor={color}></StyledColorCard>;
      })}
    </div>
  );
}

export default App;
