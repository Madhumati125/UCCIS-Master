const API = "";

let selectedZone = null;

// LOAD ZONES
async function loadZones() {
    try {
        const res = await fetch(`${API}/zone/state`);
        const data = await res.json();

        const container = document.getElementById("zones");
        container.innerHTML = "";

        data.forEach(zone => {
            const div = document.createElement("div");

            // ✅ ensure class always matches CSS
            const status = zone.status.toUpperCase();
            div.className = `zone ${status}`;

            // ✅ highlight selected zone
            if (selectedZone === zone.id) {
                div.style.outline = "3px solid black";
            }

            div.innerHTML = `
                <h3>${zone.name}</h3>
                <p>Status: ${zone.status}</p>
                <p>Load: ${zone.metrics.load}</p>
            `;

            // ✅ click to select zone
            div.onclick = () => {
                selectedZone = zone.id;
                loadZones();
            };

            container.appendChild(div);
        });

    } catch (err) {
        console.error("Zone load error:", err);
    }
}

// LOAD ALERTS
async function loadAlerts() {
    try {
        const res = await fetch(`${API}/alerts`);
        const data = await res.json();

        const container = document.getElementById("alerts");
        container.innerHTML = "";

        data.slice(-10).reverse().forEach(alert => {
            const div = document.createElement("div");

            // 🎨 severity color
            let color = "gray";
            if (alert.severity === "CRITICAL") color = "darkred";
            else if (alert.severity === "HIGH") color = "red";
            else if (alert.severity === "MEDIUM") color = "orange";
            else if (alert.severity === "LOW") color = "green";

            div.style.borderLeft = `5px solid ${color}`;
            div.style.padding = "10px";
            div.style.marginBottom = "8px";
            div.style.background = "#fff";

            div.innerHTML = `
                <strong>${alert.type}</strong><br>
                Severity: ${alert.severity} <br>
                Zone: ${alert.zoneId || "-"} <br>
                Time: ${alert.timestamp}
            `;

            container.appendChild(div);
        });

    } catch (err) {
        console.error("Alert load error:", err);
    }
}

// RECOMMENDATIONS (dynamic)
function loadRecommendations() {
    let text = `
        <p>• RED zones → immediate action required</p>
        <p>• HIGH alerts → deploy field teams</p>
        <p>• Water issues → reroute supply</p>
    `;

    if (selectedZone) {
        text += `<p>• Selected Zone: ${selectedZone}</p>`;
    }

    document.getElementById("recommendations").innerHTML = text;
}

// ACTION TRIGGER
async function triggerAction(zoneId, action) {
    try {
        // ✅ if user selected a zone → override button zone
        const targetZone = selectedZone || zoneId;

        await fetch(`${API}/action/trigger`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                zoneId: targetZone,
                action: action
            })
        });

        // 🔄 refresh everything
        await loadZones();
        await loadAlerts();
        loadRecommendations();

    } catch (err) {
        console.error("Action error:", err);
    }
}

// 🔄 AUTO REFRESH (makes system feel live)
setInterval(() => {
    loadZones();
    loadAlerts();
}, 5000);

// INITIAL LOAD
loadZones();
loadAlerts();
loadRecommendations();