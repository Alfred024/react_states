import React from "react";

class ClassState extends React.Component{
  constructor(){
    super();

    this.state = {
      error: false,
      loading: false,
    }
  }

  render(){
    return(
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {this.state.error && (<p>Hay un error</p>)}

        <input placeholder="Código de seguridad"/>
        <button
           onClick={()=>{
            this.setState( state => ({error: !state.error}) )
          }}
        >Comprobar</button>
      </div>
    );
  }
}

export {ClassState};