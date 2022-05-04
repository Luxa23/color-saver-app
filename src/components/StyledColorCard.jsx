import styled from 'styled-components';

const StyledColorCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ backgroundColor = 'hotpink' }) => backgroundColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: white;
    padding: 0.5rem;
    border-radius: 999px;
    cursor: pointer;
  }
`;

export default StyledColorCard;
