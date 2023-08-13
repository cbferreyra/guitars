"use client";

import Link from "next/link";
import data from "../../componentes/data_tarjetas.json";

import Image from "next/image";
export default function Detalles({ params }) {
  const parametro = Number(params.id[0]);
  console.log(data);
  console.log(parametro);
  let vistaProducto = {};
  vistaProducto = data.find((item) => {
    return item.id === parametro;
  });
  console.log(vistaProducto);
  return (
    <div>
      <Link href={"../../Productos"}>Vover a la galería</Link>
      <Image
        src={vistaProducto.imagen}
        width={242}
        height={500}
        alt="imagen_guitarra"
      ></Image>
      <div className="card-info-detalles">
        <h2>{vistaProducto.titulo}</h2>
        <p className="descripcion">{vistaProducto.descripcion}</p>
        <div className="card-info-detalles">
          <p className="precio">${vistaProducto.precio}</p>
          {vistaProducto.envio && <p className="envio">Envio gratis</p>}
          {/* <button
            onClick={() => capturarTarjeta(producto)}className="iraDetalles"
          >Ver detalles
          </button> */}
        </div>
      </div>
    </div>
  );
}
