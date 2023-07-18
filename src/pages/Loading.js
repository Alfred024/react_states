import React from "react";

class Loading extends React.Component{
    constructor(){
      super();
  
      this.state = {
        loading: false,
      }
    }

    componentWillUnmount(){
        console.log('componente desmontado');
    }
  
    render(){
      return(
        <div>
          Loading....
        </div>
      );
    }
  }
  
  export {Loading};