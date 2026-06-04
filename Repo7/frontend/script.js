// =====================================
// GLOBAL CHART VARIABLES
// =====================================

let riskChart;
let domainChart;
let governanceChart;
let confidenceChart;

// =====================================
// LEAFLET MAP
// =====================================

const map = L.map("map")
  .setView(
    [18.5204, 73.8567],
    12
  );

// =====================================
// MAP TILE
// =====================================

L.tileLayer(

  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

  {

    attribution:
      "OpenStreetMap"
  }

).addTo(map);

// =====================================
// ZONES
// =====================================

const zones = [

  {
    zone: "Zone 1",
    risk: "LOW",
    score: 40,
    lat: 18.5304,
    lng: 73.8467
  },

  {
    zone: "Zone 2",
    risk: "MEDIUM",
    score: 70,
    lat: 18.5104,
    lng: 73.8767
  },

  {
    zone: "Zone 3",
    risk: "MEDIUM",
    score: 80,
    lat: 18.5004,
    lng: 73.8267
  },

  {
    zone: "Zone 4",
    risk: "HIGH",
    score: 95,
    lat: 18.5404,
    lng: 73.8967
  }
];

// =====================================
// MAP MARKERS
// =====================================

zones.forEach(zone => {

  let color = "green";

  if (zone.risk === "MEDIUM") {

    color = "orange";
  }

  if (zone.risk === "HIGH") {

    color = "red";
  }

  const marker =
    L.circleMarker(

      [zone.lat, zone.lng],

      {

        radius: 15,

        color: color,

        fillColor: color,

        fillOpacity: 0.8
      }

    ).addTo(map);

  marker.bindPopup(`

    <b>${zone.zone}</b>

    <br>

    Risk:
    ${zone.risk}

    <br>

    Score:
    ${zone.score}

  `);
});

// =====================================
// PROPAGATION LINE
// =====================================

L.polyline(

  [

    [18.5404, 73.8967],
    [18.5004, 73.8267]

  ],

  {

    color: "red",

    weight: 4
  }

).addTo(map);

// =====================================
// RUN SYSTEM
// =====================================

async function runSystem() {

  try {

    // =====================================
    // FETCH API
    // =====================================

    const response =
      await fetch(

        "http://localhost:3000/temporal/convergence/4"
      );

    const data =
      await response.json();

    // =====================================
    // RAW OUTPUT
    // =====================================

    document.getElementById(
      "output"
    ).innerHTML =

      JSON.stringify(
        data,
        null,
        2
      );

    // =====================================
    // EVENT STREAM
    // =====================================

    document.getElementById(
      "events"
    ).innerHTML = `

      <div class="event">
        Flood escalation detected
      </div>

      <div class="event">
        Governance approved
      </div>

      <div class="event">
        Enforcement deployed
      </div>

      <div class="event">
        Cluster propagation executed
      </div>

      <div class="event">
        Snapshot persisted
      </div>

      <div class="event">
        Replay completed
      </div>
    `;

    // =====================================
    // DESTROY OLD CHARTS
    // =====================================

    if (riskChart) {

      riskChart.destroy();
    }

    if (domainChart) {

      domainChart.destroy();
    }

    if (governanceChart) {

      governanceChart.destroy();
    }

    if (confidenceChart) {

      confidenceChart.destroy();
    }

    // =====================================
    // LINE CHART
    // =====================================

    riskChart = new Chart(

      document.getElementById(
        "riskChart"
      ),

      {

        type: "line",

        data: {

          labels: [

            "10:00",
            "10:05",
            "10:10",
            "10:15",
            "10:20"

          ],

          datasets: [

            {

              label:
                "Zone 4 Risk",

              data: [

                30,
                50,
                70,
                85,
                95
              ],

              borderWidth: 3,

              tension: 0.4
            }
          ]
        }
      }
    );

    // =====================================
    // BAR CHART
    // =====================================

    domainChart = new Chart(

      document.getElementById(
        "domainChart"
      ),

      {

        type: "bar",

        data: {

          labels: [

            "Flooding",
            "Traffic",
            "Water",
            "Waste",
            "Complaints"

          ],

          datasets: [

            {

              label:
                "Domain Scores",

              data: [

                95,
                82,
                70,
                45,
                55
              ]
            }
          ]
        }
      }
    );

    // =====================================
    // PIE CHART
    // =====================================

    governanceChart = new Chart(

      document.getElementById(
        "governanceChart"
      ),

      {

        type: "pie",

        data: {

          labels: [

            "APPROVED",
            "HOLD",
            "RETRY",
            "REJECTED"

          ],

          datasets: [

            {

              data: [

                70,
                10,
                15,
                5
              ]
            }
          ]
        }
      }
    );

    // =====================================
    // DONUT CHART
    // =====================================

    confidenceChart = new Chart(

      document.getElementById(
        "confidenceChart"
      ),

      {

        type: "doughnut",

        data: {

          labels: [

            "Confidence",
            "Uncertainty"

          ],

          datasets: [

            {

              data: [

                88,
                12
              ]
            }
          ]
        }
      }
    );

  } catch (error) {

    document.getElementById(
      "output"
    ).innerHTML =

      JSON.stringify({

        success: false,

        error:
          error.message

      }, null, 2);
  }
}