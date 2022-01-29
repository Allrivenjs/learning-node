
const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, listar, hasta) => {
    
    try {                
            let salida = '';
            let consola = '';
            
            for (let i = 0; i <= hasta; i++){
                salida +=`${base} x ${i} = ${ base *i} \n`;
                consola +=`${base} ${'x'.green} ${i} ${'='.blue} ${ base *i} \n`;
            }
            if(listar){
                console.log("================================================================".green);
                console.log('                          Tabla del:', colors.blue(base));
                console.log("================================================================".green);

                console.log("salida: \n" + consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return `tabla del ${colors.magenta(base)} ha sido creada`;
    } catch (error) {
        throw error;
    }

    // return new Promise((resolve, reject) => {
    //     resolve(`tabla del ${base} ha sido creada`)
    // });

}

module.exports = {
    createFile
};