console.log("🔗 API integration test running...");

fetch("http://localhost:5000/api/telemetry")
  .then(res => res.json())
  .then(data => console.log("DATA:", data));