import React from "react";

const SECURITY_CODE = 'lola';

function UseState() {
    const [state, setState] = React.useState({
        typed: '',
        loading: false,
        error: false,
    });

    // const [typed, setTyped] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    React.useEffect(() =>{
        if(state.loading){
            setState({...state, error: false});
            setTimeout(() =>{
                if(state.typed !== SECURITY_CODE){
                    setState({...state, error: true});
                }
                setState({...state, loading: false});
            }, 2000);
        }
    }, [state.loading])

    return(
      <div className="flex flex-col justify-center border border-x-red-500 p-4">
        <h2>Eliminar UseState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {(state.error) && (<p>Hay un error</p>)}
        {state.loading && (<p>Cargando...</p>)}

        <input 
            placeholder="Código de seguridad"
            onChange={(event) => {
                setState({...state, typed: event.target.value});
            }}/>

        <button
            onClick={()=>{
                setState({...state, loading: true});
            }}
        >Comprobar</button>
      </div>  
    );
}

export {UseState};