const TraceGenerator =
  require("../runtime/TraceGenerator");

const traceMiddleware =
  (req, res, next) => {
    req.traceId =
      TraceGenerator.generateTraceId();

    next();
  };

module.exports =
  traceMiddleware;