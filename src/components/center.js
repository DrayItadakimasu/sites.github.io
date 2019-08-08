import React from "react";

class Center extends  React.Component {
    render() {
        return(
           <section className="weather d-flex justify-content-center align-items-center">

                   <div className="block ">
                       <div className="col-12 d-flex justify-content-center align-items-center">

                           <h1 className="m-0">{this.props.temp}&deg;</h1>
                       </div>
                       <div className="col-12 text-center">
                           <p >{this.props.description}</p>
                       </div>

                   </div>

           </section>
        )
    }
}

export  default Center;