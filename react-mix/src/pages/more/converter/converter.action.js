import * as data from './data';

const dataNumericVersion = data.dataNumericVersion();
const dataStringVersion  = data.dataStringVersion();

const cleanNumber = num => {

	if( isNaN( num ) ) return [false, 0, ':('];
	if( num > 100931731455) return [false, 0, 'Number no supported'];

	let pos = 1;
	let aux = num / pos << 0;

	while( aux >= 1000 ) {
		pos *= 1000;
		aux = num / pos << 0;
	};

	return [+num, pos, ''];
}

const convertTends = num => {
	return dataNumericVersion[ (( num / 10 ) << 0) * 10 ] 
	       + ( num % 10 ? '-' +  dataNumericVersion[ ( num % 10 ) ] : '');
}

const convertHundreds = num => {
	return dataNumericVersion[ ( ( num / 100 ) << 0)  ] 
	       + ' hundred ' + ( num % 100 ? ' and ' + converterNumericVersion( num % 100 ) : '');
}

const convertMore = ( num, positions ) => {
	const firstPart = ( num / positions ) << 0;
	const secondPart = ( num % positions );

	return converterNumericVersion( firstPart )
	       + ' ' + dataNumericVersion[positions] + ' ' + ( secondPart ? converterNumericVersion( secondPart ) : '');
}

export const converterNumericVersion = (num) => {
	let [number, positions, error] = cleanNumber(num);

	if( number === false ) return error;

	if (number >= 0 && number < 20) return dataNumericVersion[number];
	if (number >= 20 && number < 100) return convertTends(number);
	if (number >= 100 && number < 1000) return convertHundreds(number);
	if (number >= 1000) return convertMore(number, positions);
	return number;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const replaceAll = function(str, searchStr, replaceStr) {
    // escape regexp special characters in search string
    searchStr = searchStr.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    
    return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
};

const splitNumber = ( num ) => {
	let str = num;
	let len = str.length;

	if ( len % 3 ) {
	    let firstPart = str.substr( 0, len % 3 );
	    if( len > 3 ) {
	    	let secondPart = str.substr( (len % 3) ).match(/.{1,3}/g);
	    	secondPart.unshift(firstPart);
	    	return secondPart;
	    } else {
	    	return [firstPart];
	    }
	}

	return num.match(/.{1,3}/g);
} 

const cleanStringNumber = num => {
	if ( num === '' )   return [false, 0, ''];
	const auxNumber = replaceAll(num, ',','');

	if( isNaN( auxNumber ) || auxNumber.length > 66 ) return [false, 0, ':('];

	let auxArrayNumber;
	if (auxNumber.length === num.length ) {
		auxArrayNumber = splitNumber(num);
	} else {
		auxArrayNumber = num.split(',');
	}

	for (var i = auxArrayNumber.length - 1; i >= 0; i--) {
		if( isNaN( auxArrayNumber[i] ) ) return [false, 0, ':('];
		if( i !== 0 ) {
			if( auxArrayNumber[i].length !== 3 ) return [false, 0, ':('];
		} else {
			if ( auxArrayNumber[i].length > 3 ) return [false, 0, ':('];
		}
	}
	return [auxArrayNumber, auxArrayNumber.length - 2, ''];
}

const convertSTends = num => {
	return dataStringVersion.tens[ (( num / 10 ) << 0) - 1 ] 
	       + ( num % 10 ? '-' +  dataStringVersion.units[ ( num % 10 ) - 1] : '');
}

const convertSHundreds = num => {
	return dataStringVersion.units[ ( ( num / 100 ) << 0) - 1 ] 
	       + ' hundred ' + ( num % 100 ? ' and ' + converterStringVersion( (num % 100) + '' ) : '');
}

const convertSThou = ( num, thouIndex ) => {
	if( thouIndex >= 0 ) {
		return (
				 ( num[0] > 0 ) ? 
					converterStringVersion( num[0] ) + ' ' + dataStringVersion.thou[thouIndex] + ' ' : 
					''
			   ) 
		       + convertSThou( num.slice(1), thouIndex - 1 );
	}

	return converterStringVersion( num[0] );
}

export const converterStringVersion = (num) => {
	if (num === '000') return '';
	if (num === '0') return 'Zero';

	let [arrNumber, thouIndex, error] = cleanStringNumber(num);

	if( arrNumber === false ) return error;

	if( thouIndex < 0 ) {
		const number = +arrNumber[0];
		if (number >= 0   && number < 10) return dataStringVersion.units[number - 1];
		if (number >= 11  && number < 20) return dataStringVersion.teens[number - 11];
		if (number >= 10  && number < 100) return convertSTends(number);
		if (number >= 100 && number < 1000) return convertSHundreds(number);
	} else  {
		return convertSThou(arrNumber, thouIndex);
	}
	return num;
}

export const formatNumber = num => {
	const auxNumber = replaceAll(num.trim(), ',','');
	if( isNaN( auxNumber ) ) {
		return false;
	} else {
		const aux = splitNumber( auxNumber );
		return aux.reduce( (result, a) => result + ',' + a );
	}
	return false;
}