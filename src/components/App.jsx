import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './feedbackList.module.css';
import { Feedback } from './feedbacks/Feedback';
import StatItem from './stats/StatItem';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    step: 1,
  };

  handleClick = ({ currentTarget: { name } }) => {
    this.setState(prevState => {
      return { [name]: prevState[name] + this.props.step };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100;
  };

  render() {
    // console.log(Object.values(this.state));
    // const ArrOfFeedbacks = Object.values(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <div className={s.app}>
        <h1>Please leave feedback</h1>
        <div className={s.buttonWrapper}>
          <Feedback
            options={Object.keys(this.state)}
            onClick={this.handleClick}
          />
        </div>
        <h2>Statistics</h2>
        <ul className={s.feedbackList}>
          <StatItem options={Object.entries(this.state)} />
        </ul>
      </div>
    );
  }
}

export default App;
