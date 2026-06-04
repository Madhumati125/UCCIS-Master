import React from "react";

export default function MinisterDashboard() {

  return (

    <div className="min-h-screen bg-[#f3f4f6] p-8">

      {/* HEADER */}

      <h1 className="text-5xl font-bold text-black mb-10">
        Ministerial Operations Dashboard
      </h1>

      {/* CRITICAL ALERT CARD */}

      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          mb-10
          border
          border-gray-200
        "
      >

        <div className="flex items-start justify-between">

          <h2 className="text-3xl font-bold text-black">
            Critical Flood Risk Escalation
          </h2>

          <div
            className="
              bg-red-600
              text-white
              px-6
              py-3
              rounded-full
              text-lg
              font-semibold
            "
          >
            Critical
          </div>

        </div>

        <div className="mt-10 space-y-6 text-2xl">

          <p>
            <span className="font-bold">
              District:
            </span>{" "}
            Thane West
          </p>

          <p>
            <span className="font-bold">
              Operational Impact:
            </span>{" "}
            Waterlogging expected across multiple sectors.
          </p>

          <p>
            <span className="font-bold">
              Citizen Risk:
            </span>{" "}
            Potential disruption to transport and emergency movement.
          </p>

          <p>
            <span className="font-bold">
              Recommended Action:
            </span>{" "}
            Mobilize drainage response teams immediately.
          </p>

          <p>
            <span className="font-bold">
              Assigned Authority:
            </span>{" "}
            District Control Office
          </p>

        </div>

      </div>

      {/* DISTRICT STATUS */}

      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          border
          border-gray-200
        "
      >

        <h2 className="text-4xl font-bold text-black mb-10">
          District Operational Status
        </h2>

        <div className="space-y-10 text-2xl">

          <div>

            <h3 className="font-bold mb-3">
              Operational Stability
            </h3>

            <p className="text-gray-700">
              Operationally stable with moderate traffic congestion.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-3">
              Resource Pressure
            </h3>

            <p className="text-gray-700">
              Drainage teams operating at 82% utilization.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-3">
              Governance Risks
            </h3>

            <p className="text-gray-700">
              Flood escalation risk increasing in eastern sectors.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}