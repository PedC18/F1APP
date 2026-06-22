// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import DriverCard from "../components/driverCard";

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
      });
  }, []);

  const handleChange = (name: string) => {
    const driver = drivers.find(
      (d) => d.full_name === name
    );

    setSelectedDriver(driver || null);
  };

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h1>OpenF1 Driver Explorer</h1>

      <select
        onChange={(e) => handleChange(e.target.value)}
        value={selectedDriver?.full_name || ""}
      >
        {drivers.map((driver) => (
          <option
            key={driver.driver_number}
            value={driver.full_name}
          >
            {driver.full_name}
          </option>
        ))}
      </select>

      {selectedDriver && (
        <DriverCard driver={selectedDriver} />
      )}
    </main>
  );
}