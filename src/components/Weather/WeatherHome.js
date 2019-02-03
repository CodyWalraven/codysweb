import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './../Header'

const ColdBackgroundDiv = styled.div`
  width: 100vw;
  height: 88vh;
  padding: 30px;
  background-color: #e2e1e0;
  background-image: url('https://images.unsplash.com/photo-1422020297037-97bd356cc312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80');
  background-size: 100vw 112vh;
  background-attachment: scroll;
  text-align: center;
  margin: auto;
  font-size: 20px;
`

const WarmBackgroundDiv = styled(ColdBackgroundDiv)`
  background-image: url('https://images.unsplash.com/photo-1421284621639-884f4129b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
`

const StyledColdButton = styled.button`
  color: white;
  background: #008cba;
  padding: 20px 44px;
  font-size: 20px;
  margin-top: 100px;
  border: none;
  outline: none;
  border-radius: 80px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.4);
`

const StyledHotButton = styled(StyledColdButton)`
  background: #ff8d47;
`

const StyledResetButton = styled(StyledColdButton)`
  background: gray;
  padding: 10px 22px;
`

export default class WeatherHome extends React.Component {
  state = {
    temperature: '',
    temperatureMax: '',
    humidity: '',
    rain: '',
    city: '',
    state: '',
    zip: ''
  }

  getWeather = (zip, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=imperial&APPID=6d9a703f94f2006001b7094d1241d1e6`
      )
      .then(response => {
        this.setState(() => ({
          temperature: response.data.main.temp,
          backupTemperature: response.data.main.temp,
          temperatureMax: response.data.main.temp_max,
          humidity: response.data.main.humidity
        }))
      })
  }

  geoLocateAndGetWeather = () => {
    axios
      .get(
        'https://api.ipgeolocation.io/ipgeo?apiKey=080c67862a9a4f53b31e1a2327d3a248'
      )
      .then(response => {
        this.setState({
          zip: response.data.zipcode,
          city: response.data.city,
          state: response.data.state_prov
        })
      })
      .then(() => {
        this.getWeather(this.state.zip, 'us')
      })
  }

  handleColdTempChange = () => {
    console.log('making temp cold')
    this.setState(() => ({
      temperature: 30
    }))
  }
  handleHotTempChange = () => {
    console.log('making temp cold')
    this.setState(() => ({
      temperature: 80
    }))
  }
  handleResetTemp = () => {
    this.setState(() => ({
      temperature: this.state.backupTemperature
    }))
  }

  goBack = () => {
    this.props.history.goBack()
  }

  componentDidMount = () => {
    this.geoLocateAndGetWeather()
  }

  render() {
    return (
      <div style={{ overFlowX: 'hidden' }}>
        <Header title="Weather" home={true} />
        {this.state.temperature > 50 ? (
          <WarmBackgroundDiv>
            <p>
              Showing weather for{' '}
              <b>
                {this.state.city}, {this.state.state}
              </b>
            </p>
            <p>
              Current temp: <b>{this.state.temperature}F</b>
            </p>
            <p>
              Max temp today: <b>{this.state.temperatureMax}F</b>
            </p>
            <p>
              Humidity: <b>{this.state.humidity}%</b>
            </p>
            <StyledColdButton onClick={this.handleColdTempChange}>
              Try cold version
            </StyledColdButton>
            <br />
            <StyledResetButton onClick={this.handleResetTemp}>
              Reset temps
            </StyledResetButton>
          </WarmBackgroundDiv>
        ) : (
          <ColdBackgroundDiv>
            <p>
              Showing weather for{' '}
              <b>
                {this.state.city}, {this.state.state}
              </b>
            </p>
            <p>
              Current temp: <b>{this.state.temperature}F</b>
            </p>
            <p>
              Max temp today: <b>{this.state.temperatureMax}F</b>
            </p>
            <p>
              Humidity: <b>{this.state.humidity}%</b>
            </p>
            <StyledHotButton onClick={this.handleHotTempChange}>
              Try hot version
            </StyledHotButton>
            <br />
            <StyledResetButton onClick={this.handleResetTemp}>
              Reset temps
            </StyledResetButton>
          </ColdBackgroundDiv>
        )}
      </div>
    )
  }
}
