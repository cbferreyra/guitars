import Image from "next/image";
import "./home.css";
export default function Home() {
  return (
    <main>
      <div className="tituloPortada">
        <h1 className="textoTituloPortada">Tienda de guitarras</h1>
      </div>

      <div className="imagenPortada">
        <Image
          src={"/imagenes/hendrix-main.jpg"}
          width={1000}
          height={550}
          alt="Imagen de Hendrix"
        ></Image>
      </div>
      <div></div>
    </main>
  );
}
