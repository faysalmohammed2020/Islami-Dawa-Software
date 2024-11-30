import prisma from "../../../../prisma/prisma";

export async function GET() {
  try {
    const users = await prisma.newUser.findMany(); // Fetch all users
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Error fetching users", { status: 500 });
  }
}
