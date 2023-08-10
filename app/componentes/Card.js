//"use client";
import Link from "next/link";
import "./Card.css";

export default function Card({ producto }) {
  /* const capturarTarjeta = () => {
    console.log(producto);
  }; */ console.log(producto);
  return (
    <div className="card">
      <img src={producto.imagen} alt="" />
      <div className="card-info-detalles">
        <h2>{producto.titulo}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <div className="card-info-detalles">
          <p className="precio">${producto.precio}</p>
          {producto.envio && <p className="envio">Envio gratis</p>}
          <Link href={`/detallesProducto/${producto.id}`}>
            <p>ir ya</p>
          </Link>
          {/* <button
            onClick={() => capturarTarjeta(producto)}className="iraDetalles"
          >Ver detalles
          </button> */}
        </div>
      </div>
    </div>
  );
}
