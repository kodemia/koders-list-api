import { Koder, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import createError from "http-errors";

const prisma = new PrismaClient();

export async function GET() {
  console.log("GET");
  const koders = await prisma.koder.findMany({});
  return NextResponse.json({
    koders,
  });
}

export async function POST(request: Request) {
  try {
    const koder: Koder = JSON.parse(await request.text());

    if (!koder.firstName) throw createError(400, "firstName required");
    if (!koder.lastName) throw createError(400, "lastName required");
    if (!koder.email) throw createError(400, "email required");

    const koderCreated = await prisma.koder.create({
      data: {
        firstName: koder.firstName,
        lastName: koder.lastName,
        email: koder.email,
      },
    });

    return NextResponse.json({
      koderCreated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "unknown" },
      { status: error?.status || 500 }
    );
  }
}
