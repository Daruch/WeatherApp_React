import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Weather from './components/Weather';
import '../node_modules/font-awesome/css/font-awesome.min.css';




const API_KEY = 'e4dbede5f25e57ce4bd788e47b0c6b8a';
const URL = `http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=${API_KEY}`;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      temperature: "",
      country: "",
      city: "",
      humidity: "",
      description: "",
      pressure:" ",
      wind:" "

    }


    this.getWeather = this.getWeather.bind(this);
  }
  


  
  getWeather = (e) => {
     e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value; 
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&
             ${country}&appid=${API_KEY}`)
            .then(response => this.setState({
                        temperature: response.data.main.temp,
                        country:response.data.sys.country,
                        city:response.data.name,
                        humidity:response.data.main.humidity,
                        description:response.data.weather[0].description,
                        pressure:response.data.main.pressure,
                        wind: response.data.wind.speed
                      }))
                    
            .catch(err => console.log(err))        
    }
 


  render() {
    return (
      <div className="App">
        <div className = "Wrapper">
          <h2 className ="Title">Search for the weather</h2>
          <Search getWeather = {this.getWeather} />
          <Weather 
              temperature = {this.state.temperature}
              country = {this.state.country}
              city = {this.state.city}
              humidity = {this.state.humidity}
              description = {this.state.description}
              pressure = {this.state.pressure}
              wind = {this.state.wind}
          />
      
      </div>
    </div>
    );
  }
}

export default App;
