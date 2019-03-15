const mystery = "answer";
const PI = Math.PI
const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42, // mystery is defined with dynamic property syntax (it evaluates to the object 
// property value: in this case answer = 42)
  PI // assigns the same value in the obj's scope as the same one previously defined
};
