 



import React from "react";

const RestOperator = () => {
  const codeSnippet = `
  
// Function using rest operator to gather arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2));          // Output: 3
console.log(sum(1, 2, 3, 4));    // Output: 10
console.log(sum());             // Output: 0

*****************************************************************
*****************************************************************



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
        RestOperator
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
        note: optional chaining ye ek tarh ka operator bol skte hai, uska mainly
        use tab hota hai jab hum sure nhi hai ki humare object ya array ki
        properties ya value exist karti hai ya nhi, same array ke sath bhi eska
        use kr skta hai, agar object ya array me kisi properties ya value
        missing hai to wo hume error dene ki wajay null ya undefined throw krega
        eski wajh se humare project fail nhi hoga. eska proper use hume nested
        oject ke saath better pta chlta hai jab nested properties hi missing ho
        or hum use access krne ki kosis kar rhe ho then wo surely error throw
        krega whi pe kar hum optional chaining ka use kar lete hai to hum
        undefined dekhne ko milega wajay ki error. opitoal chaining pe phle
        humare pass conditonal if-else tha jiski help se hum check krete the
        lekin wo thoda lengthy process ho jata tha so abhi hum optional chaining
        ka use kar ke easily error handle kr skte hai.
      </h5>
    </div>
  );
};

export default RestOperator;



