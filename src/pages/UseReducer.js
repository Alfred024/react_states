import React from "react";

const SECURITY_CODE = 'lola';

const initialState = {
    typed: '',
    loading: false,
    error: false,
    confirmed: false, 
    deleted: false,
}

function UseReducer() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log(state);

    React.useEffect(() =>{
        if(state.loading){
            setTimeout(() =>{
                if(state.typed !== SECURITY_CODE){
                    dispatch({type: actionTypes.error});
                }else{
                    dispatch({type: actionTypes.confirmed});
                }
            }, 2000);
        }
    }, [state.loading])

    if(!state.confirmed && !state.deleted){
        return(
            <div className="m-1 flex flex-col justify-center items-center border border-slate-900 p-4">

              <h2 className="font-bold text-xl mb-4">Eliminar UseReducer</h2>
              <p>Por favor,escribe el código de seguridad:</p>
      
              {(state.error && !state.loading) && (<p>Hay un error</p>)}
              {state.loading && (<p>Cargando...</p>)}
      
              <input 
                  className="my-1 bg-slate-200 p-1 "
                  placeholder="Código de seguridad"
                  onChange={(event) => {
                      dispatch({type: actionTypes.typed, payload: event.target.value});
                  }}/>
      
              <button
                className="mt-2 text-white bg-black w-1/2 p-2"
                  onClick={()=>{
                      dispatch({type: actionTypes.check});
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
                            dispatch({type: actionTypes.delete});
                        }}
                    >Sí</button>

                    <button
                        className="p-1 w-16 bg-slate-200 border border-slate-900 rounded-md"
                        onClick={() =>{
                            dispatch({type: actionTypes.cancel});
                        }}
                    >No</button>
                </div>
            </div>
        );
    }else if(state.confirmed && state.deleted){
        return(
            <div className="p-4 bg-green-200">
                <h1 className="font-bold mb-4">Eliminado</h1>
                <button
                    className="py-1 px-2 w-fit bg-slate-200 border border-slate-900 rounded-md"
                    onClick={() =>{
                        dispatch({type: actionTypes.reset});
                    }}
                >Recuperar</button>
            </div>
        );
    }
    
}

const actionTypes = {
    error: 'ERROR',
    confirmed: 'CONFIRMED',
    typed: 'TYPED',
    check: 'CHECK',
    delete: 'DELETE', 
    cancel: 'CANCEL',
    reset: 'RESET',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {...state, error: true,loading: false,},
    [actionTypes.confirmed]: {...state, confirmed: true, error: false, loading: false,},
    [actionTypes.typed]: {...state, typed: payload},
    [actionTypes.check]: {...state, loading: true,},
    [actionTypes.delete]: {...state, deleted: true,},
    [actionTypes.cancel]: {...state, confirmed: false,},
    [actionTypes.reset]: {...state, confirmed: false,deleted: false,}
});

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
    }else{
        state;
    }
}

export {UseReducer};