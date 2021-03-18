import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { Input } from './Input';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Input></Input>
        <GuessedWords
          guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3 },
          ]}></GuessedWords>
      </div>
    );
  }
}

export default App;
