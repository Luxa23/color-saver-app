import StyledColorTag from './StyledColorTag';
import { COLORS } from '../db';

export default function ColorTag({ color }) {
  return <StyledColorTag onClick={handleClick}>{color.hexCode}</StyledColorTag>;
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}
