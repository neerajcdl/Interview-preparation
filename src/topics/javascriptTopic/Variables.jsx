import React from "react";

const Variables = () => {
  const codeSnippet = `

EXAMPLE 1
   
 function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I am outside!"
 



*****************************************************************
*****************************************************************

EXAMPLE 2
 
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2


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
        Variables
      </h1>
      <h2>
        yha pe hum ne ek outer function bnaya or eske ander kuch data variable
        bna liya ab humne ek or function bnaya ye function hum ne outer function
        ke ander bnaya ab hoga kya agar hum inner function ke ander kuch
        variables bnate hai to outer function use nhi kar payega lekin inner
        function use easily use kar skta hai essi process ko hum bolte hai.
        clousers.
      </h2>
      <h2>
        ======================================= <br />
        =======================================
      </h2>
      <h2>
        Ab kuch or chiz smjhte hai essi se related, agar hum kisi function ke
        ander koi or function bnate hai to use return krna mandetory hai.
      </h2>
      <h2>
        ======================================= <br />
        =======================================
      </h2>
      <h2>
        or agar hum ne essi tarike se function ke ander function bnaye hai to
        use hum jab access ya call krenge to bhot jaruri ho jayega us function
        calling ko kisi variable me assign krna then aage hum us variable ko
        call krenge, us outer function ko execute krene ke liye.
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

export default Variables;
