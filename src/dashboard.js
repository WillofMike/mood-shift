import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Mood Madness</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
