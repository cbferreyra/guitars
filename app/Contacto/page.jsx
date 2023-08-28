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

        <div className="itemsFormulario">

        <label for="nombre">Nombre</label>
          
          <input type="text" name="nombre" />
       
        <label for= "email"> Mail</label>
          
          <input type="email" name="email" />
        
        <label for="comentario">Mensaje</label>
          
          <textarea name="comentario" rows={"10"}></textarea>
       
        <input type="hidden" name="form-name" value="contacto" />

        <button className="botonFormulario" type="submit">Enviar</button>


        </div>
        
      </form>
    </div>
  );
}
