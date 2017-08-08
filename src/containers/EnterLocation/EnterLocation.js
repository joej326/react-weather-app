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

  }
  componentDidMount(){
    var input = document.querySelector('.weather-input');
    input.focus();
    input.select();
    input.addEventListener('keyup',function(e){
      e.preventDefault();
      e = e || window.event;
      // console.log(e);
      if(e.keyCode == 13){
        document.querySelector('.weather-button').click();

      }
    })
  }

  setInputState(userInput){
    this.setState({
      inputValue: userInput
    })
  }

  sendInput(userInput){
    if(userInput !== ''){
      this.props.getWeather(userInput)
      this.setState({
        inputValue: '',
        weather: true
      })
    }else{
      alert('Please enter a location!')
    }
  }





  render(){
    if(!this.props.weather.data){
    return (
      <div className="enter-location-main">
        <h1>Get Current Weather For:</h1>
        <div className="input-and-button">
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
      </div>
    )
  }else{
    if(this.props.weather.data){
    return (
        <div className="enter-location-main">
          <h1>{this.props.weather.data.name}</h1>
          <h2>{this.props.weather.data.weather[0].main}</h2>
          <h4>Details: {this.props.weather.data.weather[0].description}</h4>
          <p>Temperature: {this.props.weather.data.main.temp}℉</p>
          <p>Wind: {this.props.weather.data.wind.speed} mph</p>
          <a href='/'><button>Back</button></a>
        </div>
      )
    }

  }
}

}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { getWeather })(EnterLocation);
