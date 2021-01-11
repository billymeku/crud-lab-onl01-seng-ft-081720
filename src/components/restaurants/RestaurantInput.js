import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };
  
  render() {
    return (
      <div>
        {/* Restaurant Input */}
         <form onSubmit={event => this.handleSubmit(event)}>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.name}
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
