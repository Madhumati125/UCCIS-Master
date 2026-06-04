const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("./datasets/telemetry_data/sample.json")
);

function replay() {
  console.log("🔁 Replay started...");

  data.forEach((event, i) => {
    setTimeout(() => {
      console.log("EVENT:", event);
    }, i * 1000);
  });
}

replay();