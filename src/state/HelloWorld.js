import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }

    handleButtonClick = (word) => {
        this.setState({
            who: word
        });
    }

    render() {
    return (
        <div className='hello-world'>
            <p>Hello, {this.state.who}</p>
            <button onClick={() => this.handleButtonClick('World')}>World</button>
            <button onClick={() => this.handleButtonClick('Friend')}>Friend</button>
            <button onClick={() => this.handleButtonClick('React')}>React</button>
        </div>
    )
  }
}

export default HelloWorld;