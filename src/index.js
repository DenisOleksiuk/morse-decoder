const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let result ='';
    for (let i = 0; i < expr.length; i+= 10) {
        let char = '';
        for (let j = 0; j < 10; j+= 2) {
            const с = '';
            c = expr.slice(i+j, i+j+2)
            if (c === '10') {
                char += '.'
            } else if (c === '11') {
                char += '-'
            }
        }
        result += MORSE_TABLE[char]
    }
    return result.replace(/undefined/g, ' ');
}
module.exports = {
    decode
}