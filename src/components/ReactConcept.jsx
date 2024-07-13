import React from "react";
import "../components/ReactConcept.css";

const ReactConcept = ({ ReactCallback }) => {
  const reactConceptArray = [
    { id: 501, title: "What is React" },
    { id: 502, title: "What is node" },
    { id: 503, title: "What is Virtual Dom or Real Dom" },
    { id: 504, title: "Features of React" },
    { id: 505, title: "Limitation of React" },
    { id: 506, title: "npm Or Jsx Or npx" },
    { id: 507, title: "Why Can not browser read Jsx" },
    { id: 508, title: "Function Component" },
    { id: 509, title: "Life Cycle of Component" },
    { id: 510, title: "All Hooks of Functional Component" },
    { id: 511, title: "Custom Hooks" },
    { id: 512, title: "Props" },
    { id: 513, title: "Prop Drilling" },
    { id: 514, title: "Child Props" },
    { id: 515, title: "States" },
    { id: 516, title: "Events" },
    { id: 517, title: "Key in React" },
    { id: 518, title: "Data Pass Parent to Child" },
    { id: 519, title: "Data Pass Child to Parent" },
    { id: 520, title: "Controlled and uncontrolled Component" },
    { id: 521, title: "Higher Order Component" },
    { id: 522, title: "Higher Order Function" },
    { id: 523, title: "Pure Component" },
    { id: 524, title: "React Router Dom" },
    { id: 525, title: "Conditional Rendering" },
    { id: 526, title: "Functional Component Api Call" },
    { id: 527, title: "Context Api" },
    { id: 528, title: "useReducer" },
    { id: 529, title: "Redux Toolkit" },
    { id: 530, title: "Lazy Loading" },
    { id: 531, title: "Authentication" },
    { id: 532, title: "Authorization" },
    { id: 533, title: "How many Type of css implement with React" },
    { id: 534, title: "Axios" },
    { id: 535, title: "Forms" },
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
          <span>{item.id - 500}. </span>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default ReactConcept;
