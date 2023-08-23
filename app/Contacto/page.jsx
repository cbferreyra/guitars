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
        />
        <input
          className="fieldText"
          type="text"
          name="apellido"
        />

        <input
          className="fieldText"
          type="email"
          name="correo"
        />
        <textarea
          className="textarea"
          name="mensaje"
        ></textarea>

      
      </form>

      {/* formulario posta */}
      
      <form  name="contacto" method="post" className="contacto__form">
        <label>
          Nombre:
        <input
          className="fieldText"
          type="text"
          name="nombre"
        />
        </label>
        
        <label>
         Apellido 
         <input
          className="fieldText"
          type="text"
          name="apellido"
        />

         </label>
        
         <label>
          Mail
          <input
          className="fieldText"
          type="email"
          name="correo"
         />


         </label>
<label>
  Comentario
  <textarea
          className="textarea"
          name="mensaje"
        ></textarea>
  
  </label>            
        
  <input type="hidden" name="formulario" value="contacto" />
        <button type="submit">Enviar</button>

        
      
      </form>
    </div>
  );
}
