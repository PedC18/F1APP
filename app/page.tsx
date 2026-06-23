"use client";

import { useEffect, useState } from "react";
import DriverCard from "../components/DriverCard";

interface Driver {
  full_name: string;
  team_name: string;
  driver_number: number;
  country_code: string;
  headshot_url?: string;
}

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
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
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
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(220px, 1fr))",
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

          {selectedDriver && (
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                border: "1px solid #ddd",
                borderRadius: "12px",
              }}
            >
              <h2
                style={{
                  marginBottom: "1rem",
                }}
              >
                {selectedDriver.full_name}
              </h2>

              {selectedDriver.headshot_url && (
                <img
                  src={selectedDriver.headshot_url}
                  alt={selectedDriver.full_name}
                  width={200}
                  style={{
                    borderRadius: "12px",
                    marginBottom: "1rem",
                  }}
                />
              )}

              <p>
                <strong>Team:</strong>{" "}
                {selectedDriver.team_name}
              </p>

              <p>
                <strong>Number:</strong>{" "}
                {selectedDriver.driver_number}
              </p>

              <p>
                <strong>Country:</strong>{" "}
                {selectedDriver.country_code}
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}