"use client";

import { useEffect, useState } from "react";
import DriverCard from "../components/DriverCard";
import { Driver } from "../types/Driver";


export default function Home() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [selectedDriver, setSelectedDriver] =
    useState<Driver | null>(null);

  useEffect(() => {
    fetch("/api/drivers")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data);

        if (data.length > 0) {
          setSelectedDriver(data[0]);
        }
      })
      .catch((err) =>
        console.error("Failed to fetch drivers:", err)
      );
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
        }}
      >
        OpenF1 Driver Explorer
      </h1>

      {drivers.length === 0 ? (
        <p>Loading drivers...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left Column - Driver List */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            {drivers.map((driver) => (
              <DriverCard
                key={driver.driver_number}
                driver={driver}
                selected={
                  selectedDriver?.driver_number ===
                  driver.driver_number
                }
                onClick={() =>
                  setSelectedDriver(driver)
                }
              />
            ))}
          </div>

          {/* Right Column - Driver Details */}
          <div>
            {selectedDriver && (
              <div
                style={{
                  padding: "2rem",
                  border: "1px solid #ffffff",
                  borderRadius: "12px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  {selectedDriver.full_name}
                </h2>

                {selectedDriver.headshot_url && (
                  <img
                    src={selectedDriver.headshot_url}
                    alt={selectedDriver.full_name}
                    width={300}
                    style={{
                      borderRadius: "12px",
                      marginBottom: "1.5rem",
                    }}
                  />
                )}

                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    fontSize: "1.1rem",
                  }}
                >
                  <p>
                    <strong>Team:</strong>{" "}
                    {selectedDriver.team_name}
                  </p>

                  <p>
                    <strong>Number:</strong>{" "}
                    {selectedDriver.driver_number}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}