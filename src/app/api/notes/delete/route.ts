import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json(); // Recibir un array de IDs

  if (!ids || !Array.isArray(ids)) {
    return NextResponse.json(
      { error: "IDs are required and must be an array" },
      { status: 400 }
    );
  }

  try {
    // Eliminar múltiples notas
    await prisma.note.deleteMany({
      where: {
        id: {
          in: ids.map((id) => parseInt(id)), // Convertir los IDs a números
        },
      },
    });

    return NextResponse.json(
      { message: "Notes deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al eliminar las notas:", error);
    return NextResponse.json(
      { error: "Error deleting notes" },
      { status: 500 }
    );
  }
}
