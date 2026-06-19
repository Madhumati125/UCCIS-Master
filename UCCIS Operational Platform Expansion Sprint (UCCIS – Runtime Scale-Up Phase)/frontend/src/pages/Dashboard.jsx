import SummaryCards from "../components/SummaryCards";
import AnalyticsCharts from "../components/AnalyticsCharts";

function Dashboard() {
  return (
    <div>
      <h1>UCCIS Operational Dashboard</h1>

      <SummaryCards />

      <AnalyticsCharts />

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Runtime Status</h2>

          <p>Runtime Health: 98%</p>
          <p>Open Incidents: 18</p>
          <p>Critical Escalations: 6</p>
          <p>Replay Executions: 12</p>
        </div>

        <div className="dashboard-card">
          <h2>Recent Trace Activity</h2>

          <table>
            <thead>
              <tr>
                <th>Trace</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>TRACE-1001</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>TRACE-1002</td>
                <td>Running</td>
              </tr>

              <tr>
                <td>TRACE-1003</td>
                <td>Escalated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;