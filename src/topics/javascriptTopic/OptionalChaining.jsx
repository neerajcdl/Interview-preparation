import React from "react";

const OptionalChaining = () => {
  const codeSnippet = `
  EXAMPLE 1 (without use optional chaining)

  const user = {
    name:"neeraj",
    age:24,
    address:{
        city:"gurgaon"
    }
}

let city;
if(user && user.address && user.address.city){
    city = user.address.city
}else{
    city = "unknown"
}

console.log(result) // output is gurgaon

*****************************************************************
*****************************************************************

EXAMPLE 2  (without use optional chaining)

  const user = {
    name: "neeraj",
    age: 24,
    address: {
      city: "gurgaon"
    }
  };
  
  let city;
  if (user && user.address && user.address.state) {
    city = user.address.state;
  } else {
    city = "unknown";
  }
  
  console.log(city); // output is unknown

*****************************************************************
*****************************************************************

EXAMPLE 3  (use with optional chaining)

const  city = user?.address?.city
console.log(city) // output is gurgaon

*****************************************************************
*****************************************************************

EXAMPLE 4  (use with optional chaining)

const  city = user.address.state?.town
console.log(city) // output is undefined

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
        Optional Chaining
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

export default OptionalChaining;
