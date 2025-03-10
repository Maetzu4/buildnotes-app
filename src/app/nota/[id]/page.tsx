"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Note {
  title: string;
  content: string;
}

export default function Nota({ params }: { params: Promise<{ id: number }> }) {
  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false); // Estado para determinar si estamos editando

  // Controladores de cambios
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (note) {
      setNote({ ...note, title: e.target.value });
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (note) {
      setNote({ ...note, content: e.target.value });
    }
  };

  // Función para guardar la nota
  const saveNote = async () => {
    if (note) {
      try {
        const response = await fetch(`/api/notes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        });
        const data = await response.json();
        if (response.ok) {
          setNote(data); // Actualizamos la nota después de guardar
          setIsEditing(false); // Dejamos de editar
        } else {
          setError(data.error || "Error saving note");
        }
      } catch (err) {
        setError("Error saving note: " + err);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const id = (await params).id;
      setId(id);

      try {
        const response = await fetch(`/api/notes/${id}`);
        const data = await response.json();
        if (response.ok) {
          setNote(data);
        } else {
          setError(data.error || "Error fetching note");
        }
      } catch (err) {
        setError("Error fetching note" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <div className="grid grid-cols-2 p-3">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
        {/* Eliminamos el índice arriba */}
        {/* <p className="text-lg">{id}</p> */}
      </div>
      <div className="px-8">
        <h4 className="text-2xl font-bold text-center mb-4">
          {isEditing ? (
            <input
              type="text"
              value={note?.title}
              onChange={handleTitleChange}
              className="w-full text-center text-2xl font-bold mb-4"
            />
          ) : (
            note?.title
          )}
        </h4>

        {isEditing ? (
          <textarea
            value={note?.content}
            onChange={handleContentChange}
            rows={10}
            className="w-full p-4 border rounded-md"
          />
        ) : (
          <p className="text-justify">{note?.content}</p>
        )}

        {isEditing ? (
          <button
            onClick={saveNote}
            className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Guardar
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 p-2 bg-yellow-500 text-white rounded-md"
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
