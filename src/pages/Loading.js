import React from "react";

class Loading extends React.Component{
    constructor(){
      super();
  
      this.state = {
        loading: false,
      }
    }

    // Para definir el comportamiento cuando se desmonta 
    // componentWillUnmount(){
    //     console.log('componente desmontado');
    // }
  
    render(){
      return(
        <div>
          Loading....
        </div>
      );
    }
  }
  
  export {Loading};