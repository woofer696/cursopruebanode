const fs =require('fs');

let crearArchivo= async(cont)=>
{
    let data='';
    for(let i=0;i<10;i++)
    {
        //console.log(`${i} * ${cont} ${cont * i}`);
        data+=`${i} * ${cont} ${cont * i} \n`;
    } 

    return fs.writeFile(`tabla-${cont}.txt`,data,(err)=>{
        if(err) throw err;
        return `tabla-.txt`
    })
}

let crearArchivoPromesa=(cont,limite=10)=>{
    return new Promise((resolve,reject)=>
    {
        let data='';
        for(let i=0;i<limite;i++)
        {
            //console.log(`${i} * ${cont} ${cont * i}`);
            data+=`${i} * ${cont} ${cont * i} \n`;
        } 
    
          fs.writeFile(`tabla-${cont}.txt`,data,(err)=>{
            if(err) erro(reject);
            resolve(`tabla-${cont}.txt`)
        });
    })
}

// muestra en consola
let listarTabla=(cont,limite=10)=>{
    return new Promise((resolve,reject)=>
    {
        let data='';
        for(let i=0;i<limite;i++)
        {
            //console.log(`${i} * ${cont} ${cont * i}`);
            //data+=`${i} * ${cont} ${cont * i} \n`;
            console.log(`${i} * ${cont} = ${cont * i} \n`);
        } 
 
    })
}
  
module.exports={
    crearArchivo,
    crearArchivoPromesa,
    listarTabla
}
