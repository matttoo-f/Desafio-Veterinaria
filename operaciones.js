const fs = require('fs');


// crud create, read, update and delete

// json.parse = toma una cadena de texto que esta en formato json y la convierte a un objeto js
// json.stringify = toma un objeto js y lo convierte en cadena de texto




const add = (nombre,edad,tipo_de_animal, color_de_animal, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
    const id = Math.floor(Math.random() * 100).toString();
    if (!nombre || !edad || !tipo_de_animal || !color_de_animal || !enfermedad) {
        console.error('por favor ingresa todos los datos')
        return
    }
    citas.push({id, nombre, edad, tipo_de_animal, color_de_animal, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas))
}

const read = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas);
}

const update = (id, nombre, edad, tipo_de_animal, color_de_animal, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
    const index = citas.findIndex(e  => e.id === id)
    citas[index] = {id, nombre, edad, tipo_de_animal, color_de_animal,enfermedad}
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log(citas)
}

const del = (id) => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
    const index = citas.findIndex(e  => e.id === id)
    citas.splice(index,1)
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log(citas)

}
module.exports = {add, read, update, del}