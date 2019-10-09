import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'Hello, friend',
  } 

  onClickCall(stateCall){
    this.setState({who: stateCall})
  }

  render(){
    return(
    <div>
      <p>{this.state.who}</p>
      <button onClick={() => this.onClickCall('Hello, Friend')}>Friend</button>
      <button onClick={() => this.onClickCall('Hello, React!')}>React</button>
      <button onClick={() => this.onClickCall('Hello, World!')}>World</button>
    </div>
    )
  }
}

export default HelloWorld;
