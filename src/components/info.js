import React from "react";

class info extends  React.Component {
    render() {
        return(
            <nav className="navbar">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 ">

                            <h1>{this.props.city}</h1>
                        </div>
                        <form className="d-flex justify-content-center align-items-center" onSubmit={this.props.weatherMethod}>
                            <input type="text"  name="city" placeholder="Выбрать город"/>
                                <p></p>
                                <p>Мое местоположение: {this.props.coords_2} &nbsp;{this.props.coords_1}   </p>
                            <button className="btn ml-5">SEND</button>
                        </form>

                    </div>
                </div>
            </nav>
        )
    }
}

export  default info;