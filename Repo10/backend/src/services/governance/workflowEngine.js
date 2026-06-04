const governanceData =
  require('../data/governanceData');

const officerAssignment =
  require('./officerAssignment');

const escalationEngine =
  require('./escalationEngine');

const executionTracker =
  require('./executionTracker');

module.exports = () => {

  return governanceData.map(
    (workflow) => {

      return {

        ...workflow,

        assigned_officer:
          officerAssignment(
            workflow.issue
          ),

        escalation_matrix:
          escalationEngine(
            workflow.escalation_age_hours
          ),

        execution_status:
          executionTracker(
            workflow.lifecycle_state
          )

      };

    }
  );

};