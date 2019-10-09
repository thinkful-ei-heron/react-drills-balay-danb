import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';




describe(`Accordion Component`, () => {

    const sectionsProp = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion sections={sectionsProp}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders empty given no sections', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('only opens last section when multiple clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})