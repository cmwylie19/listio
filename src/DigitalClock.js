import React from "react";


export default class DigitalClock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  render() {
    let { time } = this.state;

    return (
      <>{`${
        time.getHours() + 1 > 12
          ? time.getHours() - 12 < 10
            ? `0${time.getHours() - 12}`
            : time.getHours() - 12
          : time.getHours() < 10
          ? `0${time.getHours()}`
          : time.getHours()
      }:${
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
      }:${
        time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
      }`}</>
    );
  }
}
