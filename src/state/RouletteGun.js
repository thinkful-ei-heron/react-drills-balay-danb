import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleClick = e => {
        this.setState({
            spinningTheChamber: !this.state.spinningTheChamber
        });
        setTimeout(() => {
            let randomNum = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomNum,
                spinningTheChamber: false
            })
        }, 2000)
    }

    startGun() {
        if (this.state.spinningTheChamber) {
            return (<p>spinning the chamber and pulling the trigger!....</p>)
        } 
        if (this.state.chamber === this.props.bulletInChamber) {
            return (<p>BANG!!!</p>)
        }
        return (<p>you're safe!!</p>)
    }

    render() {
        return (
            <div className="roulette-gun">
                {this.startGun()}
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;