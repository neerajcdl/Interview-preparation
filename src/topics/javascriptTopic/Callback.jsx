import React from "react";

const Callback = () => {
  const codeSnippet = `

  EXAMPLE 1

   function mainFunction(callback) {
    let value = "I am outside!";
    callback(value)
   }

   function callbackFunction(data) {
     console.log(data);
   }

   mainFunction(callbackFunction)

  EXAMPLE 2

   function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
   }

   function sayGoodbye() {
    console.log("Goodbye!");
   }

   greet("Alice", sayGoodbye);
  // Hello, Alice
  // Goodbye!
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
        Callback
      </h1>
      <h2>
        A callback function is a function that is passed as an argument to
        another function and is executed after some kind of event or operation.
        Callbacks are commonly used for asynchronous operations such as handling
        events, reading files, or making HTTP requests.
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

export default Callback;
