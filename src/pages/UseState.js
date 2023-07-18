import React from "react";

const SECURITY_CODE = 'lola';

function UseState() {
    const [typed, setTyped] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() =>{
        setError(false);
        if(loading){
            setTimeout(() =>{
                if(typed !== SECURITY_CODE){
                    setError(true);
                }
                setLoading(false);
            }, 2000);
        }
    }, [loading])

    return(
      <div className="flex flex-col justify-center border border-x-red-500 p-4">
        <h2>Eliminar UseState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {error && (<p>Hay un error</p>)}
        {loading && (<p>Cargando...</p>)}

        <input 
            placeholder="Código de seguridad"
            onChange={(event) => {
                setTyped(event.target.value);
            }}/>

        <button
            onClick={()=>{setLoading((state) => !state)}}
        >Comprobar</button>
      </div>  
    );
}

export {UseState};