function PromesaA(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'Daniel')
    })

    
}

function PromesaB(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1600,'Mi nombre es '+nombre)
    })

    
}

PromesaA().then(PromesaB).then(console.log)