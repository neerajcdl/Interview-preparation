import React from "react";

const NullishCoalescingOperators = () => {
  const codeSnippet = `
  EXAMPLE 1 (use with ?? nullish coalescing operator)
   
   let arr = "sonu", [], "", 
   let data = arr ?? "neeraj"
   console.log(data)  // output: is sonu, [], ""

*****************************************************************
*****************************************************************

EXAMPLE 2  (use with ?? nullish coalescing operator)

   let arr = null 0r undefined
   let data = arr ?? "neeraj"
   console.log(data) //  output is: neeraj
   
   
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
        Nullish Coalescing Operators
      </h1>

      <h2></h2>
      <pre>{codeSnippet}</pre>

      <h5>
        notes: nullish coalesing operator ka use hum tab karte hai jab agar kisi
        data ki value jo backend se ya khi se bhi aa rhi ho, hume bhi frontend
        pe kuch na kuch dikhana hi hai to esse me hum bydefault kuch set kar
        dete hai jaise example me neeraj set kiya hai hai agar arr ki value null
        or undefined chdod ke kuch bhi hota hai to wo original data set ho
        jayega or agar null ya undefined hota hai to bydefault value set ho
        jayegi.....ye hi hota hai double question mark or nullish coalescing
        operator
      </h5>
    </div>
  );
};

export default NullishCoalescingOperators;
