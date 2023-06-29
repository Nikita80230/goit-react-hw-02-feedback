import { Component } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

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
  
      this.setState((prevState) => {
          return {
            good: prevState.good + 1,
          }
      })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  handleClickNeutral = (event) => {
   
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
          flexDirection: "column",
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackOptions
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
          stateValue={this.state} />
        {this.state.total ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positiveFeedback={this.state.positiveFeedback}></Statistics> : <Notification message="There is no feedback"/>}
      </div>
    );
  }
};
