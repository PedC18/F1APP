// components/DriverCard.tsx

interface Driver {
  full_name: string;
  team_name: string;
  driver_number: number;
  country_code: string;
  headshot_url?: string;
}

export default function DriverCard({ driver }: { driver: Driver }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      {driver.headshot_url && (
        <img
          src={driver.headshot_url}
          alt={driver.full_name}
          width={200}
        />
      )}

      <h2>{driver.full_name}</h2>

      <p>
        <strong>Team:</strong> {driver.team_name}
      </p>

      <p>
        <strong>Number:</strong> {driver.driver_number}
      </p>

      <p>
        <strong>Country:</strong> {driver.country_code}
      </p>
    </div>
  );
}