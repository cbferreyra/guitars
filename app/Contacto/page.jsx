import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contenedorContacto">
      <div>
        <h1 className="tituloContacto">Contactanos</h1>
      </div>

      {/* formulario para Netlify otro intento */}
      <form
        name="contacto"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="nombre" />
        <input type="email" name="email" />
        <textarea name="comentario"></textarea>
      </form>

      <form method="post" className="formulario">
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Mail:
          <input type="email" name="email" />
        </label>
        <label>
          Comentarios:
          <textarea name="comentario"></textarea>
        </label>

        <input type="hidden" name="form-name" value="contacto" />

        <button type="submit">Enviar"</button>
      </form>
    </div>
  );
}
