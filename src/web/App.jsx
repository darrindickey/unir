import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { username: null }
  }

  componentDidMount() {
    this.setState({ username: "darrindickey" })
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    console.log('state', this.state)
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        {/* <img src={ReactImage} alt="react" /> */}
      </div>
    );
  }
}

export default App;