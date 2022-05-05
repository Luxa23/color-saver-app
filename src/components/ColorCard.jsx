import StyledColorCard from './StyledColorCard';
import StyledColorTag from './StyledColorTag';
import StyledButton from './StyledButton';

export default function ColorCard({ color }) {
  return (
    <StyledColorCard backgroundColor={color}>
      <StyledColorTag onClick={handleClick} color={color}>
        {color}
      </StyledColorTag>
      <StyledButton>x</StyledButton>
    </StyledColorCard>
  );
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}
