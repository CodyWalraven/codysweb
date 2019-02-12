import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './../Header'
import cold from '../../assets/cold.jpg'
import warm from '../../assets/warm.jpg'

const BackgroundDiv = styled.div`
  overflow: none;
  max-width: 100vw;
`

const ColdBackgroundDiv = styled.div`
  width: 100vw;
  height: 91.5vh;
  padding: 30px;
  background-color: #e2e1e0;
  background-image: url(${cold});
  background-size: 100vw 112vh;
  background-attachment: scroll;
  text-align: center;
  font-size: 20px;
`

const WarmBackgroundDiv = styled(ColdBackgroundDiv)`
  background-image: url(${warm});
`

const WeatherInfoDiv = styled.div`
  width: 98vw;
  height: 35vh;
  position: relative;
  right: 1rem;
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 20px;
  font-size: 25px;
  @media only screen and (max-width: 600px) {
    right: 2rem;
  }
`

const NewStyledHotButton = styled.button`
  color: white;
  background: #ff9684;
  padding: 20px 44px;
  font-size: 24px;
  margin: 5px;
  margin-top: 20px;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;

  &:active {
    background: #ffb4a8;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scaleY(1.01);
    transform: scaleX(1.01);
  }
`

const NewStyledColdButton = styled(NewStyledHotButton)`
  background: #45cbf7;

  &:active {
    background: #75dcff;
  }
`

const StyledResetButton = styled(NewStyledHotButton)`
  background: gray;
  padding: 8px 16px;
  margin-top: 20px;

  &:active {
    background: lightslategrey;
  }
`

export default class WeatherHome extends React.Component {
  state = {
    hiddenTemperature: 70
  }

  getWeather = (zip, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=imperial&APPID=6d9a703f94f2006001b7094d1241d1e6`
      )
      .then(response => {
        this.setState(() => ({
          hiddenTemperature: response.data.main.temp,
          temperature: response.data.main.temp,
          temperatureMax: response.data.main.temp_max,
          humidity: response.data.main.humidity
        }))
      })
  }

  geoLocateThenGetWeather = () => {
    axios
      .get('https://api.ipgeolocation.io/ipgeo?apiKey=4772905d32fb41fcb0d12e8e5c2b6b76')
      .then(response => {
        this.setState(() => ({
          zip: response.data.zipcode,
          city: response.data.city,
          state: response.data.state_prov
        }))
      })
      .then(() => {
        this.getWeather(this.state.zip, 'us')
      })
  }

  handleColdTempChange = () => {
    this.setState(() => ({
      hiddenTemperature: 30
    }))
  }

  handleHotTempChange = () => {
    this.setState(() => ({
      hiddenTemperature: 80
    }))
  }

  handleResetTemp = () => {
    this.setState(() => ({
      hiddenTemperature: this.state.temperature
    }))
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.geoLocateThenGetWeather()
  }

  render() {
    return (
      <BackgroundDiv>
        <Header title="Weather" home={true} />
        {this.state.hiddenTemperature > 50 ? (
          <WarmBackgroundDiv>
            <WeatherInfoDiv>
              <p>
                Showing weather for:{' '}
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
            </WeatherInfoDiv>
            <NewStyledColdButton onClick={this.handleColdTempChange}>
              Try cold version
            </NewStyledColdButton>
            <br />
            <StyledResetButton onClick={this.handleResetTemp}>Reset background</StyledResetButton>
          </WarmBackgroundDiv>
        ) : (
          <ColdBackgroundDiv>
            <WeatherInfoDiv>
              <p>
                Showing weather for:{' '}
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
            </WeatherInfoDiv>
            <NewStyledHotButton onClick={this.handleHotTempChange}>
              Try hot version
            </NewStyledHotButton>
            <br />
            <StyledResetButton onClick={this.handleResetTemp}>Reset background</StyledResetButton>
          </ColdBackgroundDiv>
        )}
      </BackgroundDiv>
    )
  }
}
