import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import createError from "http-errors";

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const koderDeleted = await prisma.koder.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      {
        koderDeleted,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "unknown" },
      {
        status: error?.status || 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
}
