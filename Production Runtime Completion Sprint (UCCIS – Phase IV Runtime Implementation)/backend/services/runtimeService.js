const signalService =
require("./signalService");

const telemetryService =
require("./telemetryService");

const incidentService =
require("./incidentService");

const escalationService =
require("./escalationService");

const replayService =
require("./replayService");

const evidenceService =
require("./evidenceService");

class RuntimeService {

  async execute(payload) {

    const signal =
      await signalService.create(
        payload
      );

    const telemetry =
      await telemetryService.generate(
        signal
      );

    const incident =
      await incidentService.create(
        signal,
        telemetry
      );

    const escalation =
      await escalationService.create(
        incident
      );

    const replay =
      await replayService.create(
        escalation
      );

    const evidence =
      await evidenceService.create(
        replay
      );

    return {

      signal,

      telemetry,

      incident,

      escalation,

      replay,

      evidence,

      status:
        "COMPLETED"

    };

  }

}

module.exports =
new RuntimeService();