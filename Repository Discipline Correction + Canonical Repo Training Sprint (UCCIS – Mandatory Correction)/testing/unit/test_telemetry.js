const assert = require("assert");

const signal = { value: 50 };

assert(signal.value < 100, "Signal out of range");

console.log("✔ Unit test passed");