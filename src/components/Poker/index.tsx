import React, {CSSProperties} from "react";
import styles from './index.less'

interface PokerProps {
  point: number | string;
  onClick?: (point: string) => void;
  style?: CSSProperties;
}

const Poker: React.FC<PokerProps> = (props) => {
  const {point, onClick, style} = props

  const handleClick = (e) => {
    onClick?.(e.target.outerText)
  }

  return <div className={styles.card} onClick={handleClick} style={style}>
    {point}
  </div>
}

export default Poker;
