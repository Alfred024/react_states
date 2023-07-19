import React from "react";

const SECURITY_CODE = 'lola';

function UseState() {
    const [state, setState] = React.useState({
        typed: '',
        loading: false,
        error: false,
        confirmed: false, 
        deleted: false,
    });

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

    if(!state.confirmed && !state.deleted){
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
                      setState({
                        ...state, 
                        loading: true,
                        confirmed: true,
                    });
                  }}
              >Comprobar</button>
            </div>  
          );
    }else if(state.confirmed && !state.deleted){
        return(
            <div className="border p-4 bg-red-200">
                <p>¿Segur@ que deseas eliminar?</p>
                <button
                    onClick={() =>{
                        setState({
                            ...state, 
                            deleted: true,
                        });
                    }}
                >Sí</button>

                <button
                    onClick={() =>{
                        setState({
                            ...state, 
                            confirmed: false,
                        });
                    }}
                >No</button>
            </div>
        );
    } else if(state.confirmed && state.deleted){
        return(
            <div className="p-4 bg-green-200">
                <h2 m-2>Eliminado</h2>
                <button
                    onClick={() =>{
                        setState({
                            ...state, 
                            confirmed: false,
                            deleted: false,
                        });
                    }}
                >Recuperar</button>
            </div>
        );
    }
    
}

export {UseState};