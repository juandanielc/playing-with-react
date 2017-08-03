import React, { Component } from 'react';
import { converterNumericVersion, converterStringVersion, formatNumber } from './converter.action';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {value:'', 
                      convertionNumericVersion: '',
                      convertionStringVersion: ''
                     };
    }

    onChange(e) {
        let num  = e.target.value.trim();
        if ( num !== '' ) num = formatNumber(num);
        if ( num || num === '' ) {
            const numV = converterNumericVersion(num);
            const strV = converterStringVersion(num);
        	this.setState({
        		value : num,
        		convertionNumericVersion: numV,
                convertionStringVersion: strV
        	});
        }
    }

    render() {
        return (
            <div>
            	<input value={this.state.value}
            		   onChange={this.onChange}
            			/><br />
            	Numeric version: {this.state.convertionNumericVersion}
            	<br/>
            	Max number suported: 100,931,731,455
                <br />
                <br />
                String version: {this.state.convertionStringVersion}
                <br/>
                Max number suported: 999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999
            </div>
        );
    }
}

export default Converter;
