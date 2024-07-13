import React from "react";

const Clouser = () => {
  const codeSnippet = `

  EXAMPLE 1

    function OuterFunction(){
    const data = "this is Neeraj"
    
    setTimeout(()=>{
        console.log(data)
    },2000)
}

OuterFunction()
  

*****************************************************************
*****************************************************************
EXAMPLE 2

function arrowFunction() {
  const data = "this is Neeraj";
  
  function innerFunction() {
    console.log(data);
  }
  
  return innerFunction; // Return the inner function, here did not call
}

const result = arrowFunction(); // result now holds the innerFunction
result(); // Call the returned function to log "this is Neeraj"


*****************************************************************
*****************************************************************
EXAMPLE 3

function arrowFunction() {
  const data = "this is Neeraj";
  
  function innerFunction() {
    console.log(data);
  }
  
  return innerFunction()
}

arrowFunction(); 



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
        Clouser
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
    </div>
  );
};

export default Clouser;
