const generateTraceId = require("../utils/traceGenerator");

const traceMiddleware = (
  req,
  res,
  next
) => {
  req.traceId = generateTraceId();

  next();
};

module.exports = traceMiddleware;