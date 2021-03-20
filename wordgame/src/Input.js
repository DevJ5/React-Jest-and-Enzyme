import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {}
  submitHandler(e) {
    e.preventDefault();
    this.props.guessWord(this.state.currentGuess);
  }
  render() {
    let content = null;
    if (!this.props.success) {
      content = (
        <form className="form-inline">
          <input
            type="text"
            className="mb-2 mx-sm-3"
            data-test="input-box"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={(e) =>
              this.setState({ currentGuess: e.target.value })
            }></input>
          <button
            onClick={this.submitHandler}
            type="submit"
            data-test="submit-button"
            className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      );
    }
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

const mapDispatchToProps = (dispatch) => {
  return {
    guessWord: (guessedWord) => dispatch(guessWord(guessedWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
