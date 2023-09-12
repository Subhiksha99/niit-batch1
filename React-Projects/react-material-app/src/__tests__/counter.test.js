import React from 'react';
import EnzymeAdapater from '@cfaester/enzyme-adapter-react-18';
import Enzyme, { shallow } from 'enzyme';
import Counter from '../components/counter';

describe('Counter test suite', () => {
    // Create Enzyme adapater instance
    Enzyme.configure({ adapter: new EnzymeAdapater() })

    // setup function to load the component
    const setup = () => shallow(<Counter />);

    test('Verify header of the counter app', () => {
        const wrapper = setup();
        // Get element by title
        let titleEle = wrapper.find('[data-test="title"]');
        expect(titleEle.text()).toBe('Counter App');
    });
    test('Verify counter value is 0 ', () => {
        const wrapper = setup();
        // Get element
        let headerEle = wrapper.find('[data-test="count-header"]');
        expect(headerEle.text()).toBe('0');
    });
    test('Verify incrment button is clickable', () => {
        const wrapper = setup();
        // Get incr button element 
        let incrBtn = wrapper.find('[data-test="incr-btn"]');
        //expect(incrBtn.props().text).toEqual('Increment');
        incrBtn.simulate('click');

    });
    test('Verify decrement button is clickable', () => {

    });
    test('Verify counter value is incremented by 1 after clicking incr button', () => {
        const wrapper = setup();
        // Get incr button element 
        let incrBtn = wrapper.find('[data-test="incr-btn"]');
        // perform click operation on incr button
        incrBtn.simulate('click');
        // verify counter value incremented by 1
        let headerEle = wrapper.find('[data-test="count-header"]');
        expect(headerEle.text()).toBe('1');

    });
    test('Verify counter value is decremented by 1 after clicking decr button', () => {
        const wrapper = setup();
        // Get incr button element 
        let decrBtn = wrapper.find('[data-test="decr-btn"]');
        // perform click operation on incr button
        decrBtn.simulate('click');
        // verify counter value incremented by 1
        let headerEle = wrapper.find('[data-test="count-header"]');
        expect(headerEle.text()).toBe('0');
    });
    test('Verify step value is set to 1 ', () => {
        const wrapper = setup();
        // Get element
        let stepInputEle = wrapper.find('[data-test="step-input"]');
        expect(stepInputEle.props().value).toBe(1);
    });

    test('Verify step value is set to 3 ', () => {
        const wrapper = setup();
        // Get element
        let stepInputEle = wrapper.find('[data-test="step-input"]');
        // initial stepValue should be 1
        expect(stepInputEle.props().value).toBe(1);
        // modify step value to 3
        stepInputEle.simulate('change', { target: { value: 3 } });

        let stepInputEle2 = wrapper.find('[data-test="step-input"]');
        expect(stepInputEle2.props().value).toBe(3);

    });

    test('Verify counter value incremented as per step value ', () => {
        const wrapper = setup();
        // Get element
        let stepInputEle = wrapper.find('[data-test="step-input"]');
        // initial stepValue should be 1
        expect(stepInputEle.props().value).toBe(1);
        // modify step value to 3
        stepInputEle.simulate('change', { target: { value: 3 } });

        let stepInputEle2 = wrapper.find('[data-test="step-input"]');
        expect(stepInputEle2.props().value).toBe(3);

        // Get incr button element 
        let incrBtn = wrapper.find('[data-test="incr-btn"]');

        // perform click operation on increment button
        incrBtn.simulate('click');

        // verify counter value incremented by 3
        let headerEle = wrapper.find('[data-test="count-header"]');
        expect(headerEle.text()).toBe('3');


        // Get incr button element 
        let incrBtn2 = wrapper.find('[data-test="incr-btn"]');
        // perform click operation on increment button
        incrBtn2.simulate('click');
        // verify counter value incremented by 3
        let headerEle2 = wrapper.find('[data-test="count-header"]');
        expect(headerEle2.text()).toBe('6');


    });



});
