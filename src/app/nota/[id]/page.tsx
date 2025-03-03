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
      <div className="grid grid-cols-2 p-3">
        <Link href={"/"}>
          <ArrowLeft />
        </Link>
        <p className="text-lg">{id}</p>
      </div>
      <div className="px-8">
        <h4 className="text-2xl font-bold text-center mb-4">
          nombre de la nota
        </h4>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quos animi facere. Saepe voluptatibus aut autem maxime nulla, totam,
          harum illo officiis dignissimos ipsum odio, praesentium qui molestiae
          alias maiores?Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Assumenda quos animi facere. Saepe voluptatibus aut autem maxime
          nulla, totam, harum illo officiis dignissimos ipsum odio, praesentium
          qui molestiae alias maiores?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Assumenda quos animi facere. Saepe voluptatibus aut
          autem maxime nulla, totam, harum illo officiis dignissimos ipsum odio,
          praesentium qui molestiae alias maiores?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Assumenda quos animi facere. Saepe
          voluptatibus aut autem maxime nulla, totam, harum illo officiis
          dignissimos ipsum odio, praesentium qui molestiae alias maiores?
        </p>
      </div>
    </div>
  );
}
