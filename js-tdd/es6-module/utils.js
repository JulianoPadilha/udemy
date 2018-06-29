function sum(a, b) {
    return a + b;
}

// named export
// permite vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves { sub }
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

const PI = 3.14;

export { mult, PI };

// método principal
// só pode ter um default por arquivo
// pode ser importado com qualquer nome
// não precisa utilizar as chaves ao ser importado
export default sum;