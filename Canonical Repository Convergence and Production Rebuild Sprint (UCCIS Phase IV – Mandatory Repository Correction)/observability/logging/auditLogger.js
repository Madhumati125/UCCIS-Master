class AuditLogger {

  log(action, user) {

    return {
      action,
      user,
      timestamp: new Date()
    };
  }
}

module.exports =
  new AuditLogger();