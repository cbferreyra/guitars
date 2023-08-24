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
        <input
          /*  className="fieldText" */
          type="text"
          name="nombre"
        />

        <input
          /*  */ className="fieldText"
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Apellido"
        />

        <input
          className="fieldText"
          type="email"
          name="correo"
          id="correo"
          placeholder="e-mail"
        />

        <textarea class="textarea" name="mensaje"></textarea>
      </form>

      {/* formulario posta */}

      <form method="post" className="contacto__form">
        <legend class="form__legend">Contacto</legend>

        <input
          className="fieldText"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
        />

        <input
          className="fieldText"
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Apellido"
        />

        <input
          className="fieldText"
          type="email"
          name="correo"
          id="correo"
          placeholder="e-mail"
        />
        <label>
          <textarea name="comentario"></textarea>
        </label>

        <input type="hidden" name="form name" value="contacto" />
        <button type="submit">Enviar"</button>
      </form>
    </div>
  );
}
