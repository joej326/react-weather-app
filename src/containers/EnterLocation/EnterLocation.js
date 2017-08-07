import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from './../../actions/index';
import './enterLocation.css'




class EnterLocation extends Component{
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      weather: false
    }
    this.renderWeather = this.renderWeather.bind( this );
  }

  setInputState(userInput){
    this.setState({
      inputValue: userInput
    })
  }

  sendInput(userInput){
    console.log(userInput);
    this.props.getWeather(userInput)
    this.setState({
      inputValue: '',
      weather: true
    })
    setTimeout(this.renderWeather, 500)
  }

  renderWeather(){
    let weather = this.props.weather.data.weather[0].main;
    console.log(weather);
    return (
      <h1>{weather}</h1>
    )

  }





  render(){
    return (
      <div className="enter-location-main">
        <h1>Enter target location:</h1>
        <input
          onChange={(e)=>this.setInputState(e.target.value)}
          value={this.state.inputValue}
          className='weather-input'
          type="text"/>
        <button
          onClick={()=>this.sendInput(this.state.inputValue)}
          className='weather-button'>Get Weather</button>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { getWeather })(EnterLocation);
