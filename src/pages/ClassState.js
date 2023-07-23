import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'lola';

class ClassState extends React.Component{
  constructor(){
    super();

    this.state = {
      error: false,
      loading: false,
      typed: '',
    }
  }

  componentDidUpdate(){
    if(this.state.loading){
      setTimeout(() =>{
          if(this.state.typed !== SECURITY_CODE){
            this.setState({error: true});
          }else{
            this.setState({error: false});
          }
          this.setState({loading: false});
      }, 2000);
  }
  }

  render(){
    //Decarando estas constantes podemos acceder directamente a los valores del componente 
    //sin necesidad de la sintaxis con el this.state
    const {error, loading} = this.state;

    return(
      <div className="m-1 flex flex-col justify-center items-center border border-slate-900">
        <h2 className="font-bold text-xl mb-4 bg-red-400 text-white w-full p-2">Eliminar ClassState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {(error && !loading) && (<p>Hay un error</p>)}
        {loading && (<Loading/>)}

        <input placeholder="Código de seguridad"
          className="my-1 bg-slate-200 p-1 "
          onChange={(event) =>{
            this.setState({typed: event.target.value}); 
            }
          }
        />

        <button
           className="mt-2 text-white bg-black w-1/2 p-2 mb-2"
           onClick={()=>{
            this.setState( state => ({loading: !state.loading}) )
          }}
        >Comprobar</button>
      </div>
    );
  }
}

export {ClassState};