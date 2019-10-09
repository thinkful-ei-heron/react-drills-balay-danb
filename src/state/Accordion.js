import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {

    static defaultProps = {
        sections: [],
    };

    state = {
        currentTabIndex: null
    };

    renderContent(current) {
        const currentSection = this.props.sections[this.state.currentTabIndex];
        if(!current) {
            return '';
        }
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
                {this.renderContent(index === this.state.currentTabIndex)}
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