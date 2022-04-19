import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

// The divs are responsible for rendering chart correctly
//style need a js obj as a value {{}}, double curly parenthese bc inner {} is a js object
// style={{ "background-color": "red" }} if there is a dash, then need "", or without "", need camel case

// <ExpensesChart expenses={filteredExpenses} />; expenses are expected in ExpensesChart component
