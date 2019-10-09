import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount(){
    this.interval = setInterval(() => this.setState({count: this.state.count +1}), 1000) 
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  bombTest(){
    if(this.state.count >= 8){
      this.componentWillUnmount()
      return (<p>BOOM</p>)
    }
    else if(this.state.count % 2 === 0){
      return (<p>TICK</p>)
    }
    else {
      return (<p>TOCK</p>)
    }
  }

  render(){
    return(
    <div>
      {this.bombTest()}
    </div>
    )
  }
}

export default Bomb;
