// Función para imprimir la tabla de multiplicar 
function imprimirTablaMultiplicar(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= limite; j++) {
            console.log(`${i} × ${j} = ${i * j}`);
        }
        console.log(''); 
    }
}

imprimirTablaMultiplicar(10);
