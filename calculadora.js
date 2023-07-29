const n1 = 5
const n2 = 5
let resultado = 0

const operador_arit = '+'

switch ( operador_arit ) {
    case '+': 
        resultado = n1 + n2
        
        break;
    case '-': 
        resultado = n1 - n2

        break;
    case '*':
        resultado = n1 * n2

        break;
    case '/':
        resultado = n1 / n2

        break;

    default:
        console.log('digite um operador valido')
        break;
}

console.log(resultado)
