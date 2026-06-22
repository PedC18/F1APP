// app/api/drivers/route.ts

export async function GET() {
  const response = await fetch(
    "https://api.openf1.org/v1/drivers?session_key=latest"
  );

  const data = await response.json();

  return Response.json(data);
}