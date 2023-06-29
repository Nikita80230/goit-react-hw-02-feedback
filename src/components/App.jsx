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
        positiveFeedback: Math.round(prevState.good / prevState.total * 100)
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

  // handleClickGood = (event) => {

  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     }
  //   })
  //   this.countTotalFeedback()
  //   this.countPositiveFeedbackPercentage()
  // }


  handleOptionClick = (option) => {

    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  render() {
    const { good, neutral, bad } = this.state
    const totalFeedback = good + neutral + bad;

    const positiveFeedback = Math.round(good / totalFeedback * 100)



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
          handleOptionClick={this.handleOptionClick}
          options={this.state} />
        {totalFeedback ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positiveFeedback={positiveFeedback}></Statistics> : <Notification message="There is no feedback" />}
      </div>
    );
  }
};
