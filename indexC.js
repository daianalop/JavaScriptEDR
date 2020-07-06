let promesaA = new Promise((resolve,reject)=> setTimeout(resolve, 500, 'Hola Soy Promesa A'))
let promesaB = new Promise((resolve,reject)=> setTimeout(resolve, 500, 'Hola Soy Promesa B'))

//promesaA.then(function(){
    //console.log('Soy Promesa A y estoy completa')
//}

//)

Promise.all([promesaA,promesaB]).then(function(e){
    console.log('Termino todo',e)
}

).catch(function(err){
    console.log(err,'esta mal')
})