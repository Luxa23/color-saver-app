import StyledColorTag from './StyledColorTag';

export default function ColorTag({ color }) {
  return <StyledColorTag onClick={handleClick}>{color.hexCode}</StyledColorTag>;
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}
