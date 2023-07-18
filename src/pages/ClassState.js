import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component{
  constructor(){
    super();

    this.state = {
      error: false,
      loading: false,
    }
  }

  componentDidUpdate(){
    if(this,state.loading){
      setTimeout(() =>{
          console.log('Loading...');
          this.setState(state => ({loading: !state.loading}))
      }, 2000);
  }
  }

  render(){
    return(
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {this.state.error && (<p>Hay un error</p>)}
        {this.state.loading && (<Loading/>)}

        <input placeholder="Código de seguridad"/>
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