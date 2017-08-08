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
    if(userInput !== ''){
      console.log(userInput);
      this.props.getWeather(userInput)
      this.setState({
        inputValue: '',
        weather: true
      })
      setTimeout(this.renderWeather, 500)
    }else{
      alert('Please enter a location!')
    }
  }

  renderWeather(){
    let weather = this.props.weather.data.weather[0].main;
    console.log(weather);

  }





  render(){
    if(!this.props.weather.data){
    return (
      <div className="enter-location-main">
        <h1>Get Current Weather For:</h1>
        <input
          placeholder='enter location'
          onChange={(e)=>this.setInputState(e.target.value)}
          value={this.state.inputValue}
          className='weather-input'
          type="text"/>
        <button
          onClick={()=>this.sendInput(this.state.inputValue)}
          className='weather-button'>Get Weather</button>
      </div>
    )
  }else{
    return (
      <div>
        <h1>{this.props.weather.data.name}</h1>
        <h2>{this.props.weather.data.weather[0].main}</h2>
        <h4>Details: {this.props.weather.data.weather[0].description}</h4>
        <p>Temperature: {this.props.weather.data.main.temp}℉</p>
        <p>Wind: {this.props.weather.data.wind.speed} mph</p>
      </div>
    )
  }
}

}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { getWeather })(EnterLocation);
