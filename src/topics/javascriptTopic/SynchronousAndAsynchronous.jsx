import React from "react";

const SynchronousAndAsynchronous = () => {
  return (
    <div>
      <h3>SynchronousAndAsynchronous</h3>
      <p>
        <span>Synchronous</span>
        Synchronous Execution Synchronous execution means that tasks are
        performed one after another, in a sequential order. Each task waits for
        the previous one to complete before it starts. This is straightforward
        and easy to understand, but it can be inefficient if a task takes a long
        time to complete. <p>console.log('First');</p> <p>console.log('Second');</p>
        <p>console.log('Third');</p>
      </p>
      <p>
        <span>Asynchronous</span>
      </p>
    </div>
  );
};

export default SynchronousAndAsynchronous;
