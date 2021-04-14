import React, {memo, useMemo} from 'react';
import {CartesianGrid, Legend, Line, LineChart as RechartsLinaChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import LabelAlignLeft from "./LabelAlignLeft";
import TriangleDot from "./TriangleDot";
import SquareDot from "./SquareDot";

const LINE_CHART_MARGIN_OPTIONS = {top: 10, left: 250, bottom: 100}
const LINE_LABEL_OPTIONS = {fill: 'black', fontSize: 18, dx: 23}
const OTHER_BOARD_LINE_LABEL_OPTIONS = {fill: 'black', fontSize: 15, dx: 23}
const X_AXIS_DOMAIN = [1, 2]
const X_AXIS_TICKS = [1, 2, 3, 4, 5]
const Y_AXIS_TICK_OPTIONS = {fill: 'black', fontSize: 18}
const LEGEND_WRAPPER_STYLE = {
  position: 'absolute',
  width: '550px',
  height: 'auto',
  left: '200px',
  bottom: '30px',
}

const LineChart = ({linegraphdata}) => {
  const lineChartData = useMemo(() => {
    let data = [...linegraphdata];

    // TODO: Why?
    const includeEmptyObject = data.some((obj) => Object.keys(obj).length === 0).length;

    if (!includeEmptyObject) {
      data = [{}, ...data, {}]
    }

    return data;
  }, [linegraphdata])

  const showOtherBoardAverage = lineChartData && lineChartData[1].otherboardaverage

  return (
    <RechartsLinaChart
      layout='vertical'
      data={lineChartData}
      margin={LINE_CHART_MARGIN_OPTIONS}>
      <CartesianGrid strokeDasharray='3 3'/>
      <XAxis type='number' orientation='top' domain={X_AXIS_DOMAIN} ticks={X_AXIS_TICKS}/>
      <YAxis
        dataKey='departmentname'
        yAxisId='1'
        type='category'
        // tick={{
        //   fill: 'black',
        //   fontSize: 18,
        // }}
        allowDataOverflow={false}
        tickMargin={5}
        tick={LabelAlignLeft}
      />
      <YAxis
        dataKey='bm'
        yAxisId='2'
        orientation='right'
        type='category'
        width={360}
        tickMargin={5}
        tick={Y_AXIS_TICK_OPTIONS}
      />
      <Line
        yAxisId='1'
        dataKey='Importance'
        stroke='#24235f'
        strokeWidth='3'
        label={LINE_LABEL_OPTIONS}
        dot={TriangleDot}
      />
      <Line
        yAxisId='1'
        dataKey='Development'
        stroke='#e16e38'
        strokeWidth='3'
        label={LINE_LABEL_OPTIONS}
        dot={SquareDot}
      />
      {showOtherBoardAverage ? (
        <Line
          yAxisId='1'
          dataKey='otherboardaverage'
          strokeDasharray='5 5'
          stroke='black'
          strokeWidth='3'
          label={OTHER_BOARD_LINE_LABEL_OPTIONS}
        />
      ) : null}
      <Legend
        wrapperStyle={LEGEND_WRAPPER_STYLE}
        verticalAlign='bottom'
        iconSize='15'
        className='legend'
      />
    </RechartsLinaChart>
  );
}

export default memo(LineChart);
