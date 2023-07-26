"use client";
export default function BotonDetalles() {
  const verDetalle = () => {
    console.log("el botón funciona");
  };
  return (
    <div>
      <button className="cardBoton" onClick={verDetalle}>
        Ver detalles
      </button>
    </div>
  );
}
