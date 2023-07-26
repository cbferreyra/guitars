import Link from "next/link";
import "./nav.css";
export default function Nav() {
  return (
    /* Es una mala práctica poner el logo dentro de la ul? */
    <nav>
      <ul className="navLista">
        <h3 className="logo">Logo</h3>
        <li className="navItem">
          <Link href="./">Inicio</Link>
        </li>
        <li className="navItem">
          <Link href="./Productos"> Productos</Link>
        </li>
        <li className="navItem">
          <Link href="./Contacto"> Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
