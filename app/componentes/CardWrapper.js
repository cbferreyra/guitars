import Card from "./Card";
import data from "./data_tarjetas.json";
import "./CardWrapper.css";

export default function CardWrapper() {
  return (
    <div className="wrapper">
      <h2>variedad de guitarras</h2>
      <div className="grilla">
        <Card producto={data} />
      </div>
    </div>
  );
}