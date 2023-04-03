import { Component } from "react";
import { Reviews } from "./Reviews/Reviews";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
          return {
              positiveFeedback: Math.round(prevState.good/prevState.total *100)
          }
      })
  }

  countTotalFeedback = () => {
    this.setState((prevState) => {
          return {
              total: prevState.good + prevState.neutral + prevState.bad,
          }
      })
  }

  handleClickGood = (event) => {
      // this.countTotalFeedback()
      this.setState((prevState) => {
          return {
            good: prevState.good + 1,
          }
      })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  handleClickNeutral = (event) => {
    // this.countTotalFeedback()
      this.setState((prevState) => {
          return {
              neutral: prevState.neutral + 1, 
          }
      })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  handleClickBad = (event) => {
    
      this.setState((prevState) => {
          return {
              bad: prevState.bad + 1,
          }
      })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Reviews countTotalFeedback={this.countTotalFeedback} handleClickGood={this.handleClickGood} handleClickNeutral={this.handleClickNeutral} handleClickBad={this.handleClickBad} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} stateValue={this.state} />
      </div>
    );
  }
};
