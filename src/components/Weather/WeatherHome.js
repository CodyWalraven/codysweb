import React from 'react'
import axios from 'axios'

export default class WeatherHome extends React.Component {
  state = {
    temperature: '',
    temperatureMax: '',
    humidity: '',
    rain: ''
  }

  getWeather = (city, state) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&APPID=6d9a703f94f2006001b7094d1241d1e6`
      )
      .then(response => {
        console.log(response.data.main)
        this.setState(() => ({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity
        }))
      })
  }

  componentDidMount() {
    this.getWeather('frisco', 'usa')
  }

  render() {
    return <p>The weather is {this.state.temperature}</p>
  }
}
