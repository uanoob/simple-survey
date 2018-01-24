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
  render() {
    let user = null;
    let questions = null;
    if (this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
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
      <div className="Text-center">
        <header className="App-header">
          <h2>Simple Survey</h2>
        </header>
        <div>
          <div className="Text-center">{user}</div>
        </div>
      </div>
    );
  }
}

export default App;
