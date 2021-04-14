import React, {memo} from 'react';
import {Text} from 'recharts';

const LabelAlignLeft = ({y, payload}) => {
  return (
    <g transform={`translate(${0},${y})`}>
      <Text x={105} width={200} fontSize={18}>
        {payload.value}
      </Text>
    </g>
  );
};

export default memo(LabelAlignLeft)
