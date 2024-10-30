const mapaDescifrado = {
    '!': 'J',
    '#': 'V',
    '$': 'R',
    '%': 'B',
    '(': ' ',  
    ')': ' ',  
    '*': 'P',
    '+': 'U',
    '-': 'H',
    '/': 'L',
    ';': 'F',
    '=': 'T',
    '?': 'A',
    '[': 'E',
    '\\': 'I',
    ']': 'N',
    '^': 'M',
    '__': 'Z',
    '`': 'C',
    '{': 'S',
    '}': 'Q',
    '~': 'O',
    '¡': 'D',
    '¬': 'Ó',
    '¿': 'Y',
};

const mensajeCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";

function descifrar(mensaje) {
    let mensajeDescifrado = '';

    
    for (let caracter of mensaje) {
        // Si el carácter existe en el mapa, se reemplaza; si no, se deja el caracter tal cual
        mensajeDescifrado += mapaDescifrado[caracter] || caracter;
    }

    return mensajeDescifrado;
}

const resultado = descifrar(mensajeCifrado);
console.log(resultado);
