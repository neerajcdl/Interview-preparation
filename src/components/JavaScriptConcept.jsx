import React from "react";
import "../components/JavaScriptConcept.css";

const JavaScriptConcept = ({ JavascriptCallback }) => {
  const jsArray = [
    "Basic Information of JavaScript",
    "Synchronous and Asynchronous",
    "Variables",
    "Data Types",
    "Default Parameter",
    "Prevent Default",
    "Stop Propagation",
    "Strict Mode",
    "Null-Undefined-NaN",
    "Undeclared and Undefined",
    "Eval",
    "Nampespace Pattern",
    "Template Literal",
    "Type Conversion",
    "Operators",
    "Nullish Coalescing Operators",
    "Switch Statement",
    "Break and Continue",
    "Rest Operator",
    "Spread Operator",
    "Ternary Operator",
    "Loop",
    "Condition",
    "Modules",
    "Clouser",
    "Functions",
    "First Class Function",
    "First Order Fuction",
    "Higher Order Function",
    "Unary Function",
    "Curring Function",
    "Pure Function",
    "Memoization",
    "Scope in Js",
    "Callback",
    "Callback hell",
    "Hoistion",
    "Map-Filter-Reduce",
    "Iterables",
    "Set and Map",
    "WeakMap and WeakSet",
    "Array",
    "Array Destructuring",
    "Array Methods",
    "Object",
    "Object Destructuring",
    "Global Object",
    "Object.key-Values-enties",
    "Object Reference and Copy",
    "Oject Mehtod This",
    "Garbage Collection",
    "Constructor Operator new",
    "Shallow Copy and Deep Copy",
    "Shadowing",
    "String",
    "String Methods",
    "Number Methods",
    "Math Methods",
    "Optional Chaining",
    "Symbol Type",
    "Date and Time",
    "JSON",
    "Promise",
    "Promise Chaining",
    "Apply-Call-bind",
    "Async-Await",
    "Try-Catch",
    "Fetch",
    "Form Properties and Methods",
    "Foucsing and Blur",
    "Form Event and Methods",
    "Custom Elements",
    "Axios",
    "What are Escape Character",
    "Event Handling",
    "Event Delegation",
    "Event Bubbling and Event Capturing",
    "SetTimeout and SetInerval",
    "Web Storage",
    "Local Storage",
    "Session Storage",
    "Cookies",
    "Web Socket",
  ];

  const handleClick = (index) => {
    // console.log("index", index);

    JavascriptCallback(index);
  };

  return (
    <div className="javascripts-concept">
      {jsArray.map((item, index) => {
        return (
          <p
            className="js-concept"
            key={index}
            onClick={() => handleClick(index)}
          >
            <span>{index + 1}. </span>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default JavaScriptConcept;
