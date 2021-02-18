const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = `=========================\n       Tabla del ${base}\n=========================\n`;
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            console.log(salida.rainbow)
        }
        return `archivo tabla-${base}.txt creado`
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}