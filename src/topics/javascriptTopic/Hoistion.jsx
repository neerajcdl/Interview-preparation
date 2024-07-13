import React from "react";

const Hoistion = () => {
  const codeSnippet = `
  Variable Hoisting

   EXAMPLE 1: WITH VARIABLE

   console.log(myVar); // Output: undefined
   var myVar = 10;
   console.log(myVar);

EXAMPLE 2: WITH VARIABLE

   var myVar;
   console.log(myVar); // Output: undefined
   myVar = 10;
   console.log(myVar); // Output: 10
  
EXAMPLE 2: WITH VARIABLE

   console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
   let myLet = 20;

   console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
   const myConst = 30;

Function Hoisting

EXAMPLE 1: WITH FUNCTION

   myFunction(); // Output: "Hello, world!"

   function myFunction() {
   console.log("Hello, world!");

EXAMPLE 2: WITH FUNCTION

  function myFunction() {
    console.log("Hello, world!");
  }

   myFunction(); // Output: "Hello, world!"
   }

EXAMPLE 3: Function Expression

   myFunction(); // TypeError: myFunction is not a function

   var myFunction = function() {
     console.log("Hello, world!");
   };

EXAMPLE 4: Function Expression

   var myFunction;

   myFunction(); // TypeError: myFunction is not a function

   myFunction = function() {
     console.log("Hello, world!");
   };

  `;
  return (
    <div>
      <h1
        style={{
          textTransform: "uppercase",
          backgroundColor: "#ff3838",
          textAlign: "center",
        }}
      >
        Hoistion
      </h1>
      <h2>
        In JavaScript, variable declarations are hoisted to the top, but their
        initializations are not. This means that the variable declaration is
        processed before any code is executed, but the assignment stays in
        place.
      </h2>
      <h3>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {codeSnippet}
        </pre>
      </h3>
    </div>
  );
};

export default Hoistion;
