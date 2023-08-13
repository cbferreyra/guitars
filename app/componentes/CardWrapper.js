import Card from "./Card";
import data from "./data_tarjetas.json";
import "./CardWrapper.css";

export default function CardWrapper() {
  return (
    <div className="wrapper">
      <h2>Conocelas y enamorate</h2>
      <div className="grilla">
        {data.map((tarjeta) => (
          <Card key={tarjeta.id} producto={tarjeta} />
        ))}
      </div>
    </div>
  );
}
