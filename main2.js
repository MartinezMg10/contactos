
let datos =''

document.getElementById('enviar').addEventListener('click', ()=>{
    datos=({nombre:nombre.value,apellido:apellido.value,numero:numero.value,gustos:gustos.value,foto:foto.value})

    localStorage.setItem('misDatos',JSON.stringify(datos))

    nombre.value = ''
    apellido.value = ''
    numero.value = ''
    gustos.value = ''
    foto.value = ''

    location.href = "index.html"
})
