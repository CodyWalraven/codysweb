import React from "react"
import axios from 'axios'

export default class WeatherHome extends React.Component {
  state = {
    weather: "20f"
  }

  getWeather = () => {
    
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Frisco,usa&units=imperial&APPID=6d9a703f94f2006001b7094d1241d1e6'
    )
    console.log(response)
    this.setState(() => ({
      weather: JSON.stringify(response)
    }))
  }

  render() {
    return <p>The weather is {this.state.weather}</p>
  }
}
