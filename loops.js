process.nextTick(() => {
  console.log("this is nextTick1");
});

process.nextTick(() => {
  Promise.resolve().then(() => {
    console.log("this is the Promise inside next tick2");
  });
  console.log("this is nextTick2");
});

process.nextTick(() => {
  console.log("this is nextTick3");
  process.nextTick(() => {
    console.log("this is the inner next tick inside next tick3");
  });
});

Promise.resolve().then(() => {
  console.log("this is the Promise.resolve 1");
});
Promise.resolve().then(() => {
  console.log("this is the Promise.resolve 2");
  Promise.resolve().then(() => {
    console.log("this is the Promise inside Promise.resolve2");
  });
});
Promise.resolve().then(() => {
  console.log("this is the Promise.resolve 3");
  process.nextTick(() => {
    console.log("this is the inner next tick inside Promise3");
  });
});
Promise.resolve().then(() => {
  console.log("this is the Promise.resolve 4");
});
// Explanation
// The Promise callbacks are executed in the order they were added because
// ES modules run the entire script as a microtask. This causes all promises to resolve first.
// After all the promises have resolved, the nextTick queue is processed
// in the order the callbacks were added.
// Any nextTick callbacks or promises inside other nextTick callbacks are also
// executed in their respective order, following the rules of the event loop and the nextTick queue in Node.js.
