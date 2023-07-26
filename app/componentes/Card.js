import BotonDetalles from "./botonDetalle";
import data from "./data_tarjetas.json";
import "./Card.css";
export default function Card() {
  return data.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.imagen} alt="" />
      <div className="card-info">{item.titulo}</div>
      <p>{item.descripcion}</p>
      <p>${item.precio}</p>
      <p>{item.envio}</p>
      <BotonDetalles />
    </div>
  ));
}
/* 
  })
    }
  
  

  
 */
