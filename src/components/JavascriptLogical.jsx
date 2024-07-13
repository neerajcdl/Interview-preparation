import React from "react";
import "../components/JavascriptLogical.css";

const JavascriptLogical = ({javascriptLogicalCallback}) => {
  const jsLogical = [
    { id: 1001, title: "Find minimum value" },
    { id: 1002, title: "Find maximum value" },
    { id: 1003, title: "Remove dublicate value" },
    { id: 1004, title: "Find how many dublicate value" },
    { id: 1005, title: "Ascending order" },
    { id: 1006, title: "Descending order" },
    { id: 1007, title: "Sorting string" },
    { id: 1008, title: "Find age GT18" },
    { id: 1009, title: "Insert element any place in array" },
    { id: 1010, title: "Find student fail or not inside ArrofObj" },
    // { id: 11, title: "" },
    // { id: 12, title: "" },
    // { id: 13, title: "" },
    // { id: 14, title: "" },
    // { id: 15, title: "" },
    // { id: 16, title: "Nullish Coalescing Operators" },
    // { id: 17, title: "Switch Statement" },
    // { id: 18, title: "Break and Continue" },
    // { id: 19, title: "Rest Operator" },
    // { id: 20, title: "Spread Operator" },
    // { id: 21, title: "Ternary Operator" },
    // { id: 22, title: "Loop" },
  ];

  const handleClick = (item) => {
    javascriptLogicalCallback(item);
  };

  return (
    <div className="javascript-logical">
      {jsLogical.map((item) => {
        return (
          <p
            className="js-logical"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <span>{item.id - 1000}. </span>
            {item.title}
          </p>
        );
      })}
    </div>
  );
};

export default JavascriptLogical;
