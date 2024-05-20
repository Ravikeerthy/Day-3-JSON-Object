// How to compare two JSON have same properties without order?

let objCompare = (obj1, obj2) => {
   return(
   JSON.stringify(Object.entries(obj1).sort()) === JSON.stringify(Object.entries(obj2).sort())
   );
};

let obj1 = { name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

console.log(objCompare(obj1,obj2));

