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
            <div className="m-1 flex flex-col justify-center items-center border border-slate-900 p-4">

              <h2 className="font-bold text-xl mb-4">Eliminar UseState</h2>
              <p>Por favor,escribe el código de seguridad:</p>
      
              {(state.error) && (<p>Hay un error</p>)}
              {state.loading && (<p>Cargando...</p>)}
      
              <input 
                  className="my-1 bg-slate-200 p-1 "
                  placeholder="Código de seguridad"
                  onChange={(event) => {
                      setState({...state, typed: event.target.value});
                  }}/>
      
              <button
                className="mt-2 text-white bg-black w-1/2 p-2"
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
            <div className="flex flex-col border p-4 bg-red-200">
                <p
                    className="font-bold mx-2"
                >¿Segur@ que deseas eliminar?</p>

                <div 
                    className="mt-4 flex justify-around">
                    <button 
                        className="p-1 w-16 bg-slate-200 border border-slate-900 rounded-md"
                        onClick={() =>{
                            setState({
                                ...state, 
                                deleted: true,
                            });
                        }}
                    >Sí</button>

                    <button
                        className="p-1 w-16 bg-slate-200 border border-slate-900 rounded-md"
                        onClick={() =>{
                            setState({
                                ...state, 
                                confirmed: false,
                            });
                        }}
                    >No</button>
                </div>
            </div>
        );
    } else if(state.confirmed && state.deleted){
        return(
            <div className="p-4 bg-green-200">
                <h1 className="font-bold mb-4">Eliminado</h1>
                <button
                    className="py-1 px-2 w-fit bg-slate-200 border border-slate-900 rounded-md"
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