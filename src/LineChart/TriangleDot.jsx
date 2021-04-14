import React, {memo} from 'react';

const TriangleDot = ({cx, cy, stroke}) => {
  if (!cx) {
    return null;
  }
  const points = `${cx},${cy - 2} ${cx - 4},${cy + 4} ${cy + 4},${cx + 4}`;

  return <polygon points={points} stroke={stroke} fill={stroke} strokeWidth='1'/>;
}

export default memo(TriangleDot);
