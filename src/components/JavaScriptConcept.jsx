import React from "react";
import "../components/JavaScriptConcept.css";

const JavaScriptConcept = ({ JavascriptCallback }) => {
  const jsArray = [
    { id: 1, title: "Basic Information of JavaScript" },
    { id: 2, title: "Synchronous and Asynchronous" },
    { id: 3, title: "Variables" },
    { id: 4, title: "Data Types" },
    { id: 5, title: "Default Parameter" },
    { id: 6, title: "Prevent Default" },
    { id: 7, title: "Stop Propagation" },
    { id: 8, title: "Strict Mode" },
    { id: 9, title: "Null-Undefined-NaN" },
    { id: 10, title: "Undeclared and Undefined" },
    { id: 11, title: "Eval" },
    { id: 12, title: "Namespace Pattern" },
    { id: 13, title: "Template Literal" },
    { id: 14, title: "Type Conversion" },
    { id: 15, title: "Operators" },
    { id: 16, title: "Nullish Coalescing Operators" },
    { id: 17, title: "Switch Statement" },
    { id: 18, title: "Break and Continue" },
    { id: 19, title: "Rest Operator" },
    { id: 20, title: "Spread Operator" },
    { id: 21, title: "Ternary Operator" },
    { id: 22, title: "Loop" },
    { id: 23, title: "Condition" },
    { id: 24, title: "Modules" },
    { id: 25, title: "Closure" },
    { id: 26, title: "Functions" },
    { id: 27, title: "First Class Function" },
    { id: 28, title: "First Order Function" },
    { id: 29, title: "Higher Order Function" },
    { id: 30, title: "Unary Function" },
    { id: 31, title: "Currying Function" },
    { id: 32, title: "Pure Function" },
    { id: 33, title: "Memoization" },
    { id: 34, title: "Scope in JS" },
    { id: 35, title: "Callback" },
    { id: 36, title: "Callback Hell" },
    { id: 37, title: "Hoisting" },
    { id: 38, title: "Map-Filter-Reduce" },
    { id: 39, title: "Iterables" },
    { id: 40, title: "Set and Map" },
    { id: 41, title: "WeakMap and WeakSet" },
    { id: 42, title: "Array" },
    { id: 43, title: "Array Destructuring" },
    { id: 44, title: "Array Methods" },
    { id: 45, title: "Object" },
    { id: 46, title: "Object Destructuring" },
    { id: 47, title: "Global Object" },
    { id: 48, title: "Object.keys-Values-entries" },
    { id: 49, title: "Object Reference and Copy" },
    { id: 50, title: "Object Method This" },
    { id: 51, title: "Garbage Collection" },
    { id: 52, title: "Constructor Operator new" },
    { id: 53, title: "Shallow Copy and Deep Copy" },
    { id: 54, title: "Shadowing" },
    { id: 55, title: "String" },
    { id: 56, title: "String Methods" },
    { id: 57, title: "Number Methods" },
    { id: 58, title: "Math Methods" },
    { id: 59, title: "Optional Chaining" },
    { id: 60, title: "Symbol Type" },
    { id: 61, title: "Date and Time" },
    { id: 62, title: "JSON" },
    { id: 63, title: "Promise" },
    { id: 64, title: "Promise Chaining" },
    { id: 65, title: "Apply-Call-bind" },
    { id: 66, title: "Async-Await" },
    { id: 67, title: "Try-Catch" },
    { id: 68, title: "Fetch" },
    { id: 69, title: "Form Properties and Methods" },
    { id: 70, title: "Focusing and Blur" },
    { id: 71, title: "Form Event and Methods" },
    { id: 72, title: "Custom Elements" },
    { id: 73, title: "Axios" },
    { id: 74, title: "Escape Characters" },
    { id: 75, title: "Event Handling" },
    { id: 76, title: "Event Delegation" },
    { id: 77, title: "Event Bubbling and Event Capturing" },
    { id: 78, title: "SetTimeout and SetInterval" },
    { id: 79, title: "Web Storage" },
    { id: 80, title: "Local Storage" },
    { id: 81, title: "Session Storage" },
    { id: 82, title: "Cookies" },
    { id: 83, title: "Web Socket" },
  ];

  const handleClick = (item) => {
    JavascriptCallback(item);
  };

  return (
    <div className="javascripts-concept">
      {jsArray.map((item) => {
        return (
          <p
            className="js-concept"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <span>{item.id}. </span>
            {item.title}
          </p>
        );
      })}
    </div>
  );
};

export default JavaScriptConcept;
