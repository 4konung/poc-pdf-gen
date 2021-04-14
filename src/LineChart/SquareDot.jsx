import React, {memo} from 'react';

const SquareDot = ({cx, cy, stroke}) => {
  return <rect x={cx - 3} y={cy - 3} width='6' height='6' stroke={stroke} fill={stroke} strokeWidth='1'/>;
};

export default memo(SquareDot)
