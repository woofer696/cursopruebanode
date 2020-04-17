
const argv = require('yargs')
.command('listar','imprime en consola la tabla de multiplicar',
    {
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    })
    .command('guardar','guarda en un archivo la tabla de multiplicar',
    {
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    })
    .argv;
const multiplicar=require('./multiplicar/multiplicar');
let cont =3;

/**
 * Sacar parametros pasados por consolas
 */
/*let argv2 = process.argv;
let parametro=argv2[2];
let base = parametro.split("=");
/* fin sacar parametro */

console.log(argv.base)

let comando = argv._[0];
switch(comando)
{
    case 'listar':
        multiplicar.listarTabla(argv.base,argv.limite);
        break;
    case 'guardar':
        multiplicar.crearArchivoPromesa(argv.base,argv.limite);
        break;
    default:
        break;
}
/*
multiplicar.crearArchivo(cont)
    .then(archivo=> console.log(archivo))
    .catch(e=>console.log(e));*/

/*
    multiplicar.crearArchivoPromesa(base[1])
    .then(archivo=> console.log(archivo))
    .catch(e=>console.log(e));*/

let text=()=>{
    return 'new update';
}