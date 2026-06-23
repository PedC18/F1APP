// components/DriverCard.tsx

interface Driver {
  full_name: string;
  team_name: string;
  driver_number: number;
  headshot_url?: string;
}

interface Props {
  driver: Driver;
  selected: boolean;
  onClick: () => void;
}

export default function DriverCard({
  driver,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-lg
        border
        p-4
        transition
        hover:shadow-md
        ${
          selected
            ? "border-red-500 bg-red-50"
            : "border-gray-200"
        }
      `}
    >
      {driver.headshot_url && (
        <img
          src={driver.headshot_url}
          alt={driver.full_name}
          className="w-20 h-20 object-cover rounded-full mx-auto"
        />
      )}

      <h3 className="mt-2 text-center font-semibold">
        {driver.full_name}
      </h3>

      <p className="text-center text-sm text-gray-500">
        {driver.team_name}
      </p>
    </div>
  );
}