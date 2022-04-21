import React from "react";
import * as d3 from "d3";

export const useD3 = (
  renderChartFn,
  dependencies,
  calledFunction,
  setCalledFunction
) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (!calledFunction) {
      renderChartFn(d3.select(ref.current));
      setCalledFunction(true);
      return () => {};
    }
  }, dependencies);
  return ref;
};
