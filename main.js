let mynum= 123456.798;
// mynum=mynum.toLocaleString("en-US");
// mynum=mynum.toLocaleString("hi-IN");
// mynum=mynum.toLocaleString("en-US", {style:"currency", currency:"USD"});
let mynum2=0.5;
mynum2=mynum2.toLocaleString(undefined,{style:"percent"});
let mynum3=55;
mynum3=mynum3.toLocaleString(undefined,{style:"unit", unit:"celsius"});
console.log(mynum3);