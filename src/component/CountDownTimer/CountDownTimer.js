import React from 'react'
import './CounDownTimer.css'
export default class CountDownTimer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          count: props.duration ? props.duration : 5,
      }
  }
  componentDidMount() {
      this.timer = setInterval(() => {
          let { count } = this.state;
          this.setState({
              count: count - 1
          })
      }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.count !== this.state.count && this.state.count === 0) {
          clearInterval(this.timer);
          if (this.props.onTimesup) {
              this.props.onTimesup();
          }
      }
  }

  fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }


  render() {
      let { count } = this.state;
      return (
          <>
          <div className="timer">
          {this.fmtMSS(count)}

          </div>
          </>
      )
  }
}