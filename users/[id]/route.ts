import { NextResponse } from "next/server";
import { users } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = users.find(u => u.id === parseInt(params.id));

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = users.findIndex(u => u.id === parseInt(params.id));

  if (index === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  users[index] = {
    ...users[index],
    name: body.name || users[index].name,
    email: body.email || users[index].email,
    role: body.role || users[index].role
  };

  return NextResponse.json(users[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = users.findIndex(u => u.id === parseInt(params.id));

  if (index === -1) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const deletedUser = users.splice(index, 1);

  return NextResponse.json(deletedUser[0]);
}