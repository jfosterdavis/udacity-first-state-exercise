import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialValue1 = Math.floor(Math.random() * 100);
	const initialValue2 = Math.floor(Math.random() * 100);
	const initialValue3 = Math.floor(Math.random() * 100);
	const initialProposedAnswer = Math.floor(Math.random() * 3) + initialValue1 + initialValue2 + initialValue3;
	const initialActualAnswer = initialValue1 + initialValue2 + initialValue3;

class App extends Component {
  state = {
  	numQuestions: 0,
    numCorrect: 0,
    value1: initialValue1,
	value2: initialValue2,
	value3: initialValue3,
	proposedAnswer: initialProposedAnswer,
    actualAnswer: initialActualAnswer,
  }

updateQuestion = () => {
	const newValue1 = Math.floor(Math.random() * 100);
	const newValue2 = Math.floor(Math.random() * 100);
	const newValue3 = Math.floor(Math.random() * 100);
	const newProposedAnswer = Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3;
  const newActualAnswer = newValue1 + newValue2 + newValue3;
  
  this.setState({
    value1: newValue1,
	value2: newValue2,
	value3: newValue3,
	proposedAnswer: newProposedAnswer,
    actualAnswer: newActualAnswer,
    })
}

scoreResponse = (response) => {
 if (response && (this.state.proposedAnswer === this.state.actualAnswer)) {
 	//answered true and was true. give a point.
   this.givePoint()
 } else if (!response && !(this.state.proposedAnswer === this.state.actualAnswer)) {
 	//answered false and was false. give a point.
   this.givePoint()
 }
  
  
  this.proceedToNextRound()
}

proceedToNextRound = () => {
    this.updateQuestion()
  this.bumpRound()
}

givePoint = () => {
 	this.setState((prevState) => ({
      
      numCorrect: prevState.numCorrect +1
    }))
 }

bumpRound = () => {
 	this.setState((prevState) => ({
      
      numQuestions: prevState.numQuestions +1
    }))
 }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.scoreResponse(true)}>True</button>
          <button onClick={() => this.scoreResponse(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
