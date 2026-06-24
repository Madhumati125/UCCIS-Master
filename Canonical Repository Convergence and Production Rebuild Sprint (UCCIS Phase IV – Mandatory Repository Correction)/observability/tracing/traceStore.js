class TraceStore {

  constructor() {
    this.store = [];
  }

  save(trace) {

    this.store.push(trace);

    return trace;
  }

  getStore() {

    return this.store;
  }
}

module.exports =
  new TraceStore();