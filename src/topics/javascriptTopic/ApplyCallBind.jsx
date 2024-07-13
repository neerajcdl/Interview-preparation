import React from "react";

const ApplyCallBind = () => {
  const codeSnippet = `
  EXAMPLE 1
     const FirstOject = {
        name: "Neeraj",
        age:26,
        gender: "Male",
        innerFun: function(){
           console.log(this)
           console.log(this.name)
           console.log(this.age)
        }
     }

     const SecondOject = {
       name: "Sonu",
        age:27,
        gender: "Male",
     }

     FirstOject.innerFun.call(SecondOject)

*****************************************************************
*****************************************************************

EXAMPLE 2
 const FirstOject = {
        name: "Neeraj",
        age:26,
        gender: "Male",
     }

      function independentFun(){
           console.log(this)
           console.log(this.name)
           console.log(this.age)
        }

     independentFun.call(FirstOject)

  `;

  const codeSnippet2 = `
    const FirstOject = {
        name: "Neeraj",
        age:26,
        gender: "Male",
     }

      function independentFun(city,state,country){   // *****parameter*****
           console.log(this)
           console.log(this.name)
           console.log(this.age)
           console.log("city:",city, "state :", state, "country :", country)
        }

     independentFun.apply(FirstOject,["Gurgaon", "Haryana","India"])  // *****argument*****
  `;
  const codeSnippet3 = `
    const FirstOject = {
        name: "Neeraj",
        age:26,
        gender: "Male",
     }

      function independentFun(city,state,country){    // *****parameter*****
           console.log(this)
           console.log(this.name)
           console.log(this.age)
           console.log("city:",city, "state :", state, "country :", country)
        }

    const copy =  independentFun.bind(FirstOject,"Gurgaon", "Haryana","India") // *****argument*****
    copy()
    copy()

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
        Apply Call Bind
      </h1>
      <h2>
        Example 1: Sab se phle hum ne ek Object bnaya usi Object ke ander hum ne
        ek function bhi bnaya, ab hoga kya! inner function sirf apne refrence
        object ko access kar skta hai wo bhi this keyword ki help se lekin agar
        hum ek or object bnate hai jiska kisi function ka reference nhi hai, to
        esse me hum kisi function ki help se us object ko kaise access krenge!
        to yha pe hum use karenge Call method, esko hum examples se smjhte hai
      </h2>
      <h2>
        ab apply ka scene smjhte hai, basically apply call ki trh hi hai but
        esme hum, function parameter as an array recieve kr skte hai, or
        argument me hum apni value send kr skte hai
      </h2>
      <h2>
        ab Bind ka scene smjhte hai bind call ki trh hi similar hai, esme kisi
        variable me apne object ke referece store krwa skte hai or use apne use
        ke according call kr skte hai, esme bhi hum parameter set kr ke argument
        pass kr ke value set kr skte hai likin esme hum array nhi pass kr skte
        jaise apply me kiya tha.
      </h2>
      <h3>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {codeSnippet}
          {codeSnippet2}
          {codeSnippet3}
        </pre>
      </h3>
    </div>
  );
};

export default ApplyCallBind;
