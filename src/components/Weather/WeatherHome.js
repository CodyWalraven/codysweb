import React from "react"
import {setState} from 'react'
import axios from 'axios'

export default class WeatherHome extends React.Component {
  state = {
    weather: "20f"
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://api.darksky.net/forecast/c888a9c0a5a934f804bc0dcfe32e2984/42.3601,-71.0589"
    )
    console.log(response)
    setState(() => ({
      weather: response
    }))
  }

  render() {
    return <p>The weather is {this.state.weather}</p>
  }
}
