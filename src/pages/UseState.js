import React from "react";

function UseState() {
    const [error, setError] = React.useState(false);

    return(
      <div>
        <h2>Eliminar UseState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {error && (<p>Hay un error</p>)}

        <input placeholder="Código de seguridad"/>
        <button
            onClick={()=>{setError((error) => !error)}}
        >Comprobar</button>
      </div>  
    );
}

export {UseState};