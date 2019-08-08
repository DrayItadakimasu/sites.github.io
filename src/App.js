import React from "react";
import Info from "./components/info";
import Center from "./components/center";
import Options from "./components/options";

const API_KEY = "c2f8ff35fbbd9241214ca09bda12241f";

class App extends  React.Component {
    state = {
        error:undefined,
        temp:  undefined,
        city: "City",
        coords: undefined,
        wind: undefined,
        pressure: undefined,
        wet: undefined,
        icon: undefined
    };
    calCelsius(temp){
        let cell = Math.floor(temp)
        return cell;
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await api_url.json();
        console.log(data);

        if (city) {
            this.setState({
                temp: this.calCelsius(data.main.temp),
                city: data.name,
                wind: data.wind.speed,
                wind_direction: data.wind.deg,
                pressure: data.main.pressure,
                icon: data.weather["0"].icon,
                description: data.weather["0"].description,
                humidity: data.main.humidity,
                coords_1: data.coord.lat,
                coords_2: data.coord.lon,


            });
        }

    }

    render() {
        return (
            <div>
                <Info weatherMethod={this.gettingWeather}
                      city={this.state.city}
                      coords_1 ={this.state.coords_1}
                      coords_2 ={this.state.coords_2}

                />
                <Center
                    temp={this.state.temp}
                    icon={this.state.icon}
                    description={this.state.description}
                />
                <Options
                wind={this.state.wind}
                pressure={this.state.pressure}
                humidity={this.state.humidity}
                wind_direction={this.state.wind_direction}
                />
            </div>
        );
    }

}

export default App;
