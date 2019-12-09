import React from 'react';

export class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.setState({value: event.target.value});
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Input:
            <input type="text" value={this.state.value} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }