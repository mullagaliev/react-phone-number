import '../.dontmock.jest';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import PhoneNumber from '..';


describe('PhoneNumber', () => {
    
    it('renders an international phone number', () => {
        var phoneNumber = TestUtils.renderIntoDocument(
            <PhoneNumber number="+61412345678" />
        );
        
        expect(ReactDOM.findDOMNode(phoneNumber).textContent).toEqual("+61 412 345 678");
    });
    
    
    it('renders a mobile phone number', () => {
        var phoneNumber = TestUtils.renderIntoDocument(
            <PhoneNumber number="0412345678" />
        );
        
        expect(ReactDOM.findDOMNode(phoneNumber).textContent).toEqual("0412 345 678");
    });
    
    
    it('renders a landline phone number', () => {
        var phoneNumber = TestUtils.renderIntoDocument(
            <PhoneNumber number="12345678" />
        );
        
        expect(ReactDOM.findDOMNode(phoneNumber).textContent).toEqual("12 345 678");
    });
    
});