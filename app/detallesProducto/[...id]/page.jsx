"use client";

import Link from "next/link";
import data from "../../componentes/data_tarjetas.json";

//import data from "../../componentes/data_tarjetas.json";

export default function Detalles({ params }) {
  const parametro = Number(params.id[0]);
  console.log(data);
  console.log(parametro);
  const VistaProducto = data.find((item) => {
    return item.id === parametro;
  });
  console.log(VistaProducto);
  return (
    <div>
      <h3>{params.precio}</h3>
      <Link href={"../../Productos"}>Volver a galería de guitarras</Link>
      <p></p>
    </div>
  );
}
