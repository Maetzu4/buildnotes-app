import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Nota({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  return (
    <div>
      <Link href={"/"}>
        <ArrowLeft size={44} />
      </Link>
      {id}
    </div>
  );
}
