import React from "react";
import "../components/ReactConcept.css";

const ReactConcept = ({ ReactCallback }) => {
  const reactConceptArray = [
    { id: 101, title: "What is React" },
    { id: 102, title: "What is node" },
    { id: 103, title: "What is Virtual Dom or Real Dom" },
    { id: 104, title: "Features of React" },
    { id: 105, title: "Limitation of React" },
    { id: 106, title: "npm Or Jsx Or npx" },
    { id: 107, title: "Why Can not browser read Jsx" },
    { id: 108, title: "Function Component" },
    { id: 109, title: "Life Cycle of Component" },
    { id: 110, title: "All Hooks of Functional Component" },
    { id: 111, title: "Custom Hooks" },
    { id: 112, title: "Props" },
    { id: 113, title: "Prop Drilling" },
    { id: 114, title: "Child Props" },
    { id: 115, title: "States" },
    { id: 116, title: "Events" },
    { id: 117, title: "Key in React" },
    { id: 118, title: "Data Pass Parent to Child" },
    { id: 119, title: "Data Pass Child to Parent" },
    { id: 120, title: "Controlled and uncontrolled Component" },
    { id: 121, title: "Higher Order Component" },
    { id: 122, title: "Higher Order Function" },
    { id: 123, title: "Pure Component" },
    { id: 124, title: "React Router Dom" },
    { id: 125, title: "Conditional Rendering" },
    { id: 126, title: "Functional Component Api Call" },
    { id: 127, title: "Context Api" },
    { id: 128, title: "useReducer" },
    { id: 129, title: "Redux Toolkit" },
    { id: 130, title: "Lazy Loading" },
    { id: 131, title: "Authentication" },
    { id: 132, title: "Authorization" },
    { id: 133, title: "How many Type of css implement with React" },
    { id: 134, title: "Axios" },
    { id: 135, title: "Forms" },
  ];

  const handleClick = (item) => {
    ReactCallback(item);
  };

  return (
    <div className="react-concept-container">
      {reactConceptArray.map((item) => (
        <p
          className="react-concept"
          key={item.id}
          onClick={() => handleClick(item)}
        >
          <span>{item.id - 100}. </span>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default ReactConcept;
