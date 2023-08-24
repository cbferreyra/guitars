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

        <div className="textArea__label"></div>
        <textarea
          class="textarea"
          name="mensaje"
          id="mensaje"
          cols="30"
          rows="10"
          placeholder="Escribí aquí tu mensaje"
        ></textarea>
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

        <textarea
          class="textarea"
          name="mensaje"
          id="mensaje"
          cols="30"
          rows="10"
          placeholder="Escribí aquí tu mensaje"
        ></textarea>

        <input type="submit" value="Enviar" />

        <input type="hidden" name="formulario" value="contacto" />

        {/* <div className="checkAceptacion">
          <input type="checkbox" name="acepta" id="acepta" value="1" /> Acepto
          los terminosycondiciones términos y condiciones
        </div> */}
      </form>
    </div>
  );
}
