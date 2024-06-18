import React from "react";
import "../components/ReactConcept.css";

const ReactConcept = ({ ReactCallback }) => {
  const reactConceptArray = [
    "What is React",
    "What is node",
    "What is Virtual Dom or Real Dom",
    "Features of React",
    "Limitation of React",
    "npm Or Jsx Or npx",
    "Why Can not browser read Jsx",
    "Function Component",
    "Life Cycle of Component",
    "All Hooks of Functional Component",
    "Custom Hooks",
    "Props",
    "Prop Drilling",
    "Child Props",
    "States",
    "Events",
    "Key in React",
    "Data Pass Parent to Child",
    "Data Pass Child to Parent",
    "Controlled and uncontrolled Component",
    "Higher Order Component",
    "Higher Order Function",
    "Pure Component",
    "React Router Dom",
    "Conditional Rendering",
    "Functional Component Api Call",
    "Context Api",
    "useReducer",
    "Redux Toolkit",
    "Lazy Loading",
    "Authentication",
    "Authorization",
    "How many Type of css implement with React",
    "Axios",
    "Forms",
  ];

  const handleClick = (index) => {
    ReactCallback(index);
  };

  return (
    <div className="react-concept-container">
      {reactConceptArray.map((item, index) => {
        return (
          <p
            className="react-concept"
            key={index}
            onClick={() => handleClick(index + 101)}
          >
            <span>{index + 1}. </span>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default ReactConcept;
