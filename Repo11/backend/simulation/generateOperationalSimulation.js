const {
  runOperationalSimulation
} = require(
  "../services/operationalSimulationService"
);

const simulation =
  runOperationalSimulation();

console.log(
  "Operational Simulation Complete"
);

console.log(simulation);