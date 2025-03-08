// app/api/notes/route.js
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { title, content } = await req.json();

  if (!title || !content) {
    return new Response(
      JSON.stringify({ error: "Title and content are required" }),
      { status: 400 }
    );
  }

  try {
    const note = await prisma.note.create({
      data: {
        title,
        content,
      },
    });
    return new Response(JSON.stringify(note), { status: 201 });
  } catch {
    return new Response(JSON.stringify({ error: "Error creating note" }), {
      status: 500,
    });
  }
}

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
    return new Response(JSON.stringify(notes), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Error fetching notes" }), {
      status: 500,
    });
  }
}
