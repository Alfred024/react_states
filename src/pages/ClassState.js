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
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {(error && !loading) && (<p>Hay un error</p>)}
        {loading && (<Loading/>)}

        <input placeholder="Código de seguridad"
          onChange={(event) =>{
            this.setState({typed: event.target.value}); 
            }
          }
        />

        <button
           onClick={()=>{
            this.setState( state => ({loading: !state.loading}) )
          }}
        >Comprobar</button>
      </div>
    );
  }
}

export {ClassState};