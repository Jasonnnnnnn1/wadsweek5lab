import { NextResponse } from "next/server";
import { users } from "@/lib/data";

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email) {
    return NextResponse.json(
      { message: "Name and email are required" },
      { status: 400 }
    );
  }

  const newUser = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
    role: body.role || "user"
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}