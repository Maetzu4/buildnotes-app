// app/api/notes/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const note = await prisma.note.findUnique({
      where: {
        id: parseInt(id), // Convertimos a número
      },
    });

    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(note, { status: 200 });
  } catch (error) {
    console.error("Error al obtener la nota:", error);
    return NextResponse.json({ error: "Error fetching note" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { title, content } = await req.json();

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  try {
    const updatedNote = await prisma.note.update({
      where: {
        id: parseInt(id), // Convertimos a número
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(updatedNote, { status: 200 });
  } catch (error) {
    console.error("Error al actualizar la nota:", error);
    return NextResponse.json({ error: "Error updating note" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.note.delete({
      where: {
        id: parseInt(id), // Convertimos a número
      },
    });

    return NextResponse.json(
      { message: "Note deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al eliminar la nota:", error);
    return NextResponse.json({ error: "Error deleting note" }, { status: 500 });
  }
}
