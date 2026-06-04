import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const getIcon = (status) => {
  let color = "#52c41a";
  if (status === "RED") color = "#ff4d4f";
  else if (status === "YELLOW") color = "#faad14";

  return L.divIcon({
    className: "",
    html: `<div style="
      width:16px;
      height:16px;
      border-radius:50%;
      background:${color};
      border:2px solid white;
      box-shadow:0 0 10px ${color};
    "></div>`
  });
};

const ZoneMap = ({ zones }) => {

  return (
    <MapContainer
      center={[21.1458, 79.0882]}
      zoom={12}
      style={{ height: "350px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {zones.map((z, i) => (
        <Marker
          key={z.id}
          position={[21.1458 + i * 0.01, 79.0882 + i * 0.01]}
          icon={getIcon(z.status)}

          // ✅ HOVER EVENTS (FIXED)
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            }
          }}
        >
          <Popup closeButton={false} autoClose={false}>
            <div>
              <strong>{z.name}</strong><br />
              Status: {z.status}<br />

              {z.requestStatus === "❌ Rejected" && (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  ⚠️ Action Rejected
                </div>
              )}

              {z.requestStatus === "✅ Approved" && (
                <div style={{ color: "green", fontWeight: "bold" }}>
                  ✅ Action Approved
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
};

export default ZoneMap;