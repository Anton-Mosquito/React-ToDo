import React from "react";
import "./modal.css"

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
           <React.Fragment>
               <button onClick={()=> this.setState({isOpen : true})}>Open Modal</button>

               {this.state.isOpen && <div className="modal">
                   <div className="body">
                       <h1>Title</h1>
                       <p>Text</p>
                       <button  onClick={()=> this.setState({isOpen : false})}>Close modal</button>
                   </div>
               </div>}
           </React.Fragment>
        )
    }
}