const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

clearTimeout(timerId);


// Node also has other timer functions:
//   setImmediate
//   clearTimeout
// These are used to clear the timers