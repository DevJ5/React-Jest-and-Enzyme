import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    let content = null;
    if (!this.props.success) {
      content = (
        <form className="form-inline">
          <input
            type="text"
            className="mb-2 mx-sm-3"
            data-test="input-box"
            placeholder="enter guess"></input>
          <button
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

export default connect(mapStateToProps)(Input);
