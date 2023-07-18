import React from "react";

function UseState() {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() =>{
        if(loading){
            setTimeout(() =>{
                console.log('Loading...');
                setLoading(false);
            }, 2000);
        }
    }, [loading])

    return(
      <div>
        <h2>Eliminar UseState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {error && (<p>Hay un error</p>)}
        {loading && (<p>Cargando...</p>)}

        <input placeholder="Código de seguridad"/>
        <button
            onClick={()=>{setLoading((state) => !state)}}
        >Comprobar</button>
      </div>  
    );
}

export {UseState};