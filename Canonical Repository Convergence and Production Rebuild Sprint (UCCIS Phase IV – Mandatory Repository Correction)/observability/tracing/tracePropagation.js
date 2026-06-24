class TracePropagation {

  propagate(traceId) {

    return {
      traceId,
      propagated: true,
      timestamp: new Date()
    };
  }
}

module.exports =
  new TracePropagation();