import React from 'react';


export default class PhoneNumber extends React.Component {
    render () {
        var number = this.props.number.replace(/[^0-9\+]+/g, '').replace(/\s+/, '');

        if (number.length == 8) {
            number = number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
        } else if (number.length == 10) {
            number = number.replace(/([0-9]{4})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
        } else if (number.indexOf('+') == 0) {
            number = number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{3})/, "$1 $2 $3 $4");
        }
        
        return (<span>{number}</span>);
    }
}