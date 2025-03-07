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
        <p className="text-lg">{id}</p>
      </div>
      <div className="px-8">
        <h4 className="text-2xl font-bold text-center mb-4">{note?.title}</h4>
        <p className="text-justify">{note?.content}</p>
      </div>
    </div>
  );
}
