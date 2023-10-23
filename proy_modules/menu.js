const mostrarMenu = () => {

    return new Promise(resolve =>{
        console.log(`=========================`.green);
        console.log(`  Seleccione una opcion  `.green);
        console.log(`=========================\n`.green);
        console.log(`${'1.'.green} Crear nuevo producto`);
        console.log(`${'2.'.green} Listar producto`);
        console.log(`${'3.'.green} Listar clientes`);
        console.log(`${'4.'.green} Listar pedios`);
        console.log(`${'5.'.green} Enviar pedidos`);
        console.log(`${'6.'.green} Borrar pedido`);
        console.log(`${'0.'.green} Salir\n`);

        // Definimos la interfaz del teclado para que el usuario interactue
        const readLine = require('readline').createInterface({
            input: process.stdin, // Node espera lo que diggita el usuario
            output: process.stdout // Node muestra en consola un mensaje
        });

        // Crear la interfaz definida
        readLine.question('Seleccione una opcion:', (opt) => {
            readLine.close();
            resolve(opt);
        })
    })

};

const pausa = () => {

    return new Promise(resolve =>{

        // Definimos la interfaz del teclado para que el usuario interactue
        const readLine = require('readline').createInterface({
            input: process.stdin, // Node espera lo que diggita el usuario
            output: process.stdout // Node muestra en consola un mensaje
        });

        // Crear la interfaz definida
        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })
            
    })
    
};

module.exports = {
    mostrarMenu,
    pausa
}