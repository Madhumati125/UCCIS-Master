const { v4: uuidv4 } = require('uuid');

module.exports = (req, res, next) => {

  const traceId = uuidv4();

  req.traceId = traceId;

  res.setHeader('x-trace-id', traceId);

  next();
};