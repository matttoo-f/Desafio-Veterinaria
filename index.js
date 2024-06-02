const {add, read, update, del} = require('./operaciones.js')

const [accion,id, nombre, edad, tipo_de_animal, color_de_animal, enfermedad] = process.argv.slice(2);

if(accion === 'add') {
    add(id, nombre, edad, tipo_de_animal, color_de_animal, enfermedad)
}
if (accion === 'read') {
    read()
}
if(accion === 'update') {
    update(id, nombre, edad, tipo_de_animal, color_de_animal, enfermedad)
}
if(accion === 'del') {
    del(id)
}