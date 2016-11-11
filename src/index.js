const React = require('react');


const PhoneNumber = ({ number, isLinked, className }) => {
    number = number.toString().replace(/[^0-9\+]+/g, '').replace(/\s+/, '');
    
    let formatted_number;

    if (number.length == 8) {
        formatted_number = number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
    } else if (number.length == 10) {
        formatted_number = number.replace(/([0-9]{4})([0-9]{3})([0-9]{3})/, "$1 $2 $3");
    } else if (number.indexOf('+') == 0) {
        formatted_number = number.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{3})/, "$1 $2 $3 $4");
    }
    
    if (isLinked) {
        return (<a href={`tel:${number}`} className={className}>{formatted_number}</a>);
    } else {
        return (<span className={className}>{formatted_number}</span>);
    }
};


PhoneNumber.propTypes = {
    number: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]).isRequired,
    isLinked: React.PropTypes.bool,
    className: React.PropTypes.string
};


PhoneNumber.defaultProps = {
    isLinked: false
};


module.exports = PhoneNumber;