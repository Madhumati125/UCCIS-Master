const processStream = (signal) => {
  if (signal.value > 80) {
    console.log("⚠️ HIGH LOAD DETECTED");
  } else {
    console.log("✔ Normal");
  }
};

module.exports = processStream;