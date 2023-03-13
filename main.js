import contactos from './datos/data.js'

const img = document.getElementById('img')
const name = document.getElementById('name')
const criterio = document.getElementById('criterio')
const images = document.getElementById('imagenes')
const datos = document.getElementById('datos')



document.getElementById('buscar').addEventListener('click',()=>{

    contactos.forEach(element => {


        if (name.value == element.nombre) {
        img.src=`${element.foto}`

            if(criterio.value == 'apellido'){
                datos.innerHTML=`<p>Apellido: ${element.apellido}</p>`
            }else if(criterio.value == 'numero'){
                datos.innerHTML=`<p>Numero: ${element.numero}</p>`
            }else if(criterio.value == 'gustos'){
                datos.innerHTML=`<p>Gustos: ${element.gustos}</p>`
            }else{
                datos.innerHTML=`
                <p>Nombre: ${element.nombre}</p>
                <p>Apellido: ${element.apellido}</p>
                <p>Numero: ${element.numero}</p>
                <p>Gustos: ${element.gustos}</p>`
            }
          }
        });
}) 
 


document.getElementById('agregar').addEventListener('click',()=>{
    location.href = "index2.html";
})


function agregar(){
    let misDatos =JSON.parse(localStorage.getItem("misDatos"))
    
    contactos.push(misDatos)
}


console.log(contactos)
agregar()

function cinta (){
    contactos.forEach(element => {
        images.innerHTML+=`<img src="${element.foto}">`
    });
}

cinta()