import React from "react";

class options extends  React.Component {
    render() {
        return(
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="name_property">Влажность</p>
                        <p className="property">{this.props.humidity}%</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="name_property">Давление</p>
                        <p className="property">{this.props.pressure}мм рт. ст.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="name_property">Ветер</p>
                        <p className="property">{this.props.wind}м/с,</p>
                    </div>
                </div>
            </div>
            </footer>
        )
    }
}

export  default options;