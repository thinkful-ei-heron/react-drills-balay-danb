import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {

    static defaultProps = {
        sections: [],
    };

    state = {
        currentTabIndex: null
    };

    renderContent() {
        const currentSection = this.props.sections[this.state.currentTabIndex];
        return (
            <p>{currentSection.content}</p>
        )
    }

    handleClick(index) {
        this.setState({ currentTabIndex: index })
    }

    renderButtonLi() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                {section.title}
                </button>
                {(index === this.state.currentTabIndex) ? this.renderContent() : ''}
            </li>
        ))
    }
    
    render() {
        return (
            <ul>
                {this.renderButtonLi()}
            </ul>
        )
    }
}

export default Accordion;