const Lab = require('lab');
const React = require('react');
const { shallow } = require('enzyme');

const expect = require('code').expect;
const lab = exports.lab = Lab.script();

const PhoneNumber = require('../lib');


lab.experiment('PhoneNumber', () => {
    lab.test('renders an international phone number', (done) => {
        let container = shallow(
            <PhoneNumber number="+61412345678" />
        );
        
        expect(container.html()).to.contain("+61 412 345 678");
        
        done();
    });
    
    
    lab.test('renders a mobile phone number', (done) => {
        let container = shallow(
            <PhoneNumber number="0412345678" />
        );
        
        expect(container.html()).to.contain("0412 345 678");
        
        done();
    });
    
    
    lab.test('renders a landline phone number', (done) => {
        let container = shallow(
            <PhoneNumber number="12345678" />
        );
        
        expect(container.html()).to.contain("12 345 678");
        
        done();
    });
    
    
    lab.test('links to a tel:', (done) => {
        let container = shallow(
            <PhoneNumber number="12345678" isLinked={true} />
        );
        
        expect(container.html()).to.contain("12 345 678");
        expect(container.html()).to.contain("<a href=\"tel:12345678\">");
        
        done();
    });
    
});