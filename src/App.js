import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    id: '',
    name: '',
    answers: {
      q1: '',
      q2: '',
      q3: '',
      q4: ''
    },
    submitted: false
  };

  handleNameSubmit = event => {
    let name = this.refs.name.value;
    this.setState(...this.state, { name: name }, () => {
      console.log(this.state);
    });
    event.preventDefault();
  };

  handleQuestionSubmit = event => {
    event.preventDefault();
  };

  handleQuestionChange = event => {
    let answers = this.state.answers;
    switch (event.target.name) {
      case 'q1':
        answers.q1 = event.target.value;
        break;
      case 'q2':
        answers.q2 = event.target.value;
        break;
      case 'q3':
        answers.q3 = event.target.value;
        break;
      case 'q4':
        answers.q4 = event.target.value;
        break;
      default: answers = this.state.answers;
    }
    this.setState(...this.state, { answers: answers }, () => {
      console.log(this.state);
    });
  };

  render() {
    let user = null;
    let questions = null;
    if (this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>;
      questions = (
        <span>
          <h3>Survey Questions</h3>
          <form onSubmit={this.handleQuestionSubmit}>
            <div>
              <label htmlFor="">What is your favorite operating system?</label>
              <br />
              <input
                type="radio"
                name="q1"
                value="Windows"
                onChange={this.handleQuestionChange}
              />Windows<br />
              <input
                type="radio"
                name="q1"
                value="Macintosh"
                onChange={this.handleQuestionChange}
              />Macintosh<br />
              <input
                type="radio"
                name="q1"
                value="Linux"
                onChange={this.handleQuestionChange}
              />Linux<br />
              <input
                type="radio"
                name="q1"
                value="Solaris"
                onChange={this.handleQuestionChange}
              />Solaris<br />
              <input
                type="radio"
                name="q1"
                value="Other"
                onChange={this.handleQuestionChange}
              />Other<br />
            </div>
            <div>
              <label>What is your favorite brand of TV?</label>
              <br />
              <input
                type="radio"
                name="q2"
                value="Sony"
                onChange={this.handleQuestionChange}
              />Sony<br />
              <input
                type="radio"
                name="q2"
                value="Samsung"
                onChange={this.handleQuestionChange}
              />Samsung<br />
              <input
                type="radio"
                name="q2"
                value="Panasonic"
                onChange={this.handleQuestionChange}
              />Green<br />
              <input
                type="radio"
                name="q2"
                value="Vizio"
                onChange={this.handleQuestionChange}
              />Vizio<br />
              <input
                type="radio"
                name="q2"
                value="Other"
                onChange={this.handleQuestionChange}
              />Other<br />
            </div>
            <div>
              <label>What is your favorite Smartphone Brand?</label>
              <br />
              <input
                type="radio"
                name="q3"
                value="Morning"
                onChange={this.handleQuestionChange}
              />Apple<br />
              <input
                type="radio"
                name="q3"
                value="Afternoon"
                onChange={this.handleQuestionChange}
              />Samsung<br />
              <input
                type="radio"
                name="q3"
                value="Evening"
                onChange={this.handleQuestionChange}
              />Nexus<br />
              <input
                type="radio"
                name="q3"
                value="Night"
                onChange={this.handleQuestionChange}
              />Blackberry<br />
              <input
                type="radio"
                name="q3"
                value="Other"
                onChange={this.handleQuestionChange}
              />Other<br />
            </div>
            <div>
              <label>What is your favorite CPU Brand?</label>
              <br />
              <input
                type="radio"
                name="q4"
                value="Intel"
                onChange={this.handleQuestionChange}
              />Intel<br />
              <input
                type="radio"
                name="q4"
                value="AMD"
                onChange={this.handleQuestionChange}
              />AMD<br />
              <input
                type="radio"
                name="q4"
                value="Nvidia"
                onChange={this.handleQuestionChange}
              />Nvidia<br />
              <input
                type="radio"
                name="q4"
                value="ARM"
                onChange={this.handleQuestionChange}
              />ARM<br />
              <input
                type="radio"
                name="q4"
                value="Other"
                onChange={this.handleQuestionChange}
              />Other<br />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </span>
      );
    } else if (!this.state.name && this.state.submitted === false) {
      user = (
        <span>
          <h2>Please enter your name to begin the survey</h2>
          <form onSubmit={this.handleNameSubmit}>
            <input type="text" placeholder="Enter Name..." ref="name" />
          </form>
        </span>
      );
      questions = '';
    } else if (this.state.submitted === true) {
    }
    return (
      <div className="">
        <header className="App-header Text-center">
          <h2>Simple Survey</h2>
        </header>
        <div>
          <div className="Text-center">{user}</div>
          <div className="Container">{questions}</div>
        </div>
      </div>
    );
  }
}

export default App;
