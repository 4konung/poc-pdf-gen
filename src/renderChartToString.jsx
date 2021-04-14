import React from "react";
import ReactDOMServer from "react-dom/server";
import Html from "./Html/Html";
import TestLineChart from "./Test/TestLineChart";

const renderChartToString = () => {
  const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Html>
      <TestLineChart />
    </Html>
  );

  console.log(htmlString);

  return htmlString;
};

export default renderChartToString;
