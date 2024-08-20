```
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
```

Microtask Queue:

process.nextTick() is a Node.js method that adds a callback to the "next tick queue". This queue is processed after the current operation completes, but before the next event loop continues.

A process.nextTick callback is added to process.nextTick queue. A Promise.then() callback is added to promises microtask queue. Event loop executes tasks in process.nextTick queue first, and then executes promises microtask queue, and then executes macrotask queue.
A setTimeout, setImmediate callback is added to macrotask queue.

# When using ES modules, the entire module loading and execution process is wrapped in a promise, which means that when the module is loaded, the code within it runs inside a promise microtask. This affects the order in which the Promise and process.nextTick() callbacks are executed.
