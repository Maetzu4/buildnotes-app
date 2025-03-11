import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("search") || "";

  try {
    const notes = await prisma.note.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm, mode: "insensitive" } },
          { content: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
    });
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching notes" + error },
      { status: 500 }
    );
  }
}
