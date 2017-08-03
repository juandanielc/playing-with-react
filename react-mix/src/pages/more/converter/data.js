let arrayNumericVersion = [];
arrayNumericVersion[0]='cero';
arrayNumericVersion[1]='one';
arrayNumericVersion[2]='two';
arrayNumericVersion[3]='three';
arrayNumericVersion[4]='four';
arrayNumericVersion[5]='five';
arrayNumericVersion[6]='six';
arrayNumericVersion[7]='seven';
arrayNumericVersion[8]='eight';
arrayNumericVersion[9]='nine';
arrayNumericVersion[10]='ten';
arrayNumericVersion[11]='eleven';
arrayNumericVersion[12]='twelve';
arrayNumericVersion[13]='thirteen';
arrayNumericVersion[14]='fourteen';
arrayNumericVersion[15]='fifteen';
arrayNumericVersion[16]='sixteen';
arrayNumericVersion[17]='seventeen';
arrayNumericVersion[18]='eighteen';
arrayNumericVersion[19]='nineteen';
arrayNumericVersion[20]='twenty';
arrayNumericVersion[30]='thirty';
arrayNumericVersion[40]='forty';
arrayNumericVersion[50]='fifty';
arrayNumericVersion[60]='sixty';
arrayNumericVersion[70]='seventy';
arrayNumericVersion[80]='eighty';
arrayNumericVersion[90]='ninety';
arrayNumericVersion[1000]='thousand';
arrayNumericVersion[1000000]='million';
arrayNumericVersion[1000000000]='billion';

export const dataNumericVersion = () => arrayNumericVersion;

const units = [ "one", "two", "three", "four", "five", 
          		"six", "seven", "eight", "nine" ];

const teens = [ "eleven", "twelve", "thirteen", "four", "fifteen", 
          		"sixteen", "seventeen", "eighteen", "nineteen" ];

const tens = [ "ten", "twenty", "thirty", "forty", "fifty", 
         	   "sixty", "seventy", "eighty", "ninety" ];

const thou = [ "thousand", "million", "billion", "trillion", 
			   "quadrillion", "quintillion", "sextillion", 
			   "septillion", "octillion", "nonillion", "decillion", 
			   "udecillion", "duodecillion", "tredecillion", 
			   "quattuordecillion", "quindecillion", "sexdecillion", 
			   "septendecillion", "octodecillion", "novemdecillion", 
			   "vigintillion" ];

export const dataStringVersion = () => ({units, teens, tens, thou});