class EvidenceEngine {
  constructor() {
    this.evidence = [];
  }

  addEvidence(data) {
    const item = {
      evidenceId:
        "EVD-" +
        Date.now(),

      traceId: data.traceId,

      fileName: data.fileName,

      type: data.type,

      uploadedAt:
        new Date()
    };

    this.evidence.push(item);

    return item;
  }

  getEvidence() {
    return this.evidence;
  }
}

module.exports =
  new EvidenceEngine();