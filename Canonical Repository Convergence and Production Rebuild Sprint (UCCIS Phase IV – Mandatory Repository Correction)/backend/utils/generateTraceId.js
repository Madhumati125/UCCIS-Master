const generateTraceId = () => {
  return (
    "TRACE-" +
    Date.now() +
    "-" +
    Math.floor(
      Math.random() * 1000
    )
  );
};

module.exports =
  generateTraceId;