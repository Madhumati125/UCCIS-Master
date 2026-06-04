import React, { useEffect, useState } from "react";
import { getZoneIntelligence } from "../api/intelligenceApi";
import ZoneCard from "../components/ZoneCard";

const Dashboard = () => {
  const [zonesData, setZonesData] = useState([]);

  const zones = [1, 2, 3, 4, 5, 6]; // 👈 multiple zones

  useEffect(() => {
    Promise.all(zones.map((id) => getZoneIntelligence(id)))
      .then((results) => {
        setZonesData(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>UCCIS Intelligence Dashboard</h1>

      <div style={styles.grid}>
        {zonesData.map((zone, index) => (
          <ZoneCard key={index} data={zone} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#f0f2f5",
    minHeight: "100vh"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "20px",
    alignItems: "stretch"
  }
};

export default Dashboard;