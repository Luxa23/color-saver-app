import StyledColorCard from './StyledColorCard';

export default function ColorCard({ color }) {
  return (
    <StyledColorCard backgroundColor={color}>
      <span onClick={handleClick} color={color}>
        {color}
      </span>
      <button>x</button>
    </StyledColorCard>
  );
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}
