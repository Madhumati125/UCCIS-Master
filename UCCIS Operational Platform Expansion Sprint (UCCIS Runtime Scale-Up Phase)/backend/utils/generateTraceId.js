const generateTraceId = () => {
  return `TRACE-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

module.exports = generateTraceId;