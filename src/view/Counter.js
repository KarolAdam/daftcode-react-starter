import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  };

  state = {
    from: this.props.from,
    to: this.props.to,
    stopwatchWorking: true,
    counter: 0,
  };

  stopwatchStop() {
    clearInterval(this.intervalId);
    this.setState({
      stopwatchWorking: false,
    });
  }
  stopwatchStart = () => {
    if (this.state.from === this.state.to) return
    this.intervalId = setInterval(e => this.setState({ counter: this.state.counter+1 }), 1000);
  };
  componentWillMount() {
    this.stopwatchStart();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderTimer() {
    let minutes = 0;
    let seconds = 0;
    if (this.state.counter < 60) {
      seconds = this.state.counter;
    } else {
      seconds = this.state.counter - 60;
      minutes = Math.floor(this.state.counter / 60);
    }
    let min = minutes<10 ? `0${minutes}` : minutes;
    let sec = seconds<10 ? `0${seconds}` : seconds;
    return <span> {min} : {sec} </span>;
  }
  render() {
    return <h1> {this.renderTimer()} </h1>;
  }
}

export default Counter;
