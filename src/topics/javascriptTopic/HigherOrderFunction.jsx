import React from "react";

const HigherOrderFunction = () => {
  const codeSnippet = `
  EXAMPLE 1 

  function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


*****************************************************************
*****************************************************************

EXAMPLE 2  (Combining Both Concepts) Callback and Higher order function

this is the best example of filter data without filter method
 
function filterArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filterArray(numbers, function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]


   
   
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
        Higher Order Function
      </h1>

      <h2></h2>
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

      <h5>
        A higher-order function is a function that either takes one or more
        functions as arguments, returns a function, or both. Higher-order
        functions are a key concept in functional programming and enable
        powerful abstractions and code reuse.
      </h5>
    </div>
  );
};

export default HigherOrderFunction;
