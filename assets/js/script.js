document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

/**1.- Agregar los pacientes indicados */
let propiedades = ['hora', 'especialista', 'paciente', 'rut', 'prevision']
let nuevosPacientes = []

let arregloPacientes = ['09:00;RENÉ POBLETE;ANA GELLONA;13123329-7;ISAPRE', '09:30;MARIA SOLAR;RAMIRO ANDRADE;12221451-K; FONASA',
    '10:00;RAUL LOYOLA;CARMEN ISLA; 10112348-3; ISAPRE', '10:30;ANTONIO LARENAS;PABLO LOAYZA; 13453234-1; ISAPRE',
    '12:00;MATIAS ARAVENA;SUSANA POBLETE; 14345656-6; FONASA']


/**
 * Summary. Agrega pacientes a una lista de pacientes 
 * Description. convierte un un array de propiedades para un objeto y un string que representa los datos de paciente en objetos
 * luegos los puebla
 * @Param {string} string: es un string que representa los datos de un paciente separados por un ; simulando un archivo csv.
 * si el separador es diferent se puede modificar el string, no va a funcionar si el separador no es ;
 * se puede modificar para que otro parametro sea un separador a eleccion del usuario.
 * @Param {array} listaPacientes: una lista a eleccion para rellenar de nuevos pacientes.
 * 
 * 
*/
function nuevoPaciente(string, listaPacientes) {
    let paciente = string.split(";");
    let nuevoObjeto = {}
    for (i in propiedades) {
        let propiedad = propiedades[i].replace('"', '');
        nuevoObjeto[propiedad] = paciente[i];
    }
    listaPacientes.push(nuevoObjeto);
}

for (i of arregloPacientes) {
    nuevoPaciente(i, radiologia);

}

console.log(radiologia);



/**extraer el primer y ultimo elementos de radiologia */
radiologia.shift()
radiologia.pop()



/** 3.-*/
dental.forEach(x=>document.write(`<p>${Object.values(x).join(' - ')}</p>`));


/**4.- Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
(3 Puntos).
Ejemplo:
FRANCISCA ROJAS
PAMELA ESTRADA
ARMANDO LUNA... */

let totalPacientesAtendidos = radiologia.concat(traumatologia,dental);

let nombrePacientes = totalPacientesAtendidos.map(paciente=>{
    return paciente.paciente;
});

document.write('<p>total de pacientes que se atendieron en el centro medico nunoa</p>')
nombrePacientes.forEach(nombre => document.write(`<p>${nombre}</p>`))

//5.- filtrar pacientes dentales por isapre

let filtroIsapreDentales = dental.filter(paciente => {return paciente.prevision == 'ISAPRE'})
document.write('<p><strong>Pacientes dentales que tienen Isapre</strong></p>')
filtroIsapreDentales.forEach(paciente=>{document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`)})

//6.- filtrar pacientes traumatologia por fonasa
//Agregar código para el desafio 2 aquí

let filtroFonasaTraumatologia = traumatologia.filter(paciente => {return paciente.prevision == 'FONASA'})
document.write('<p><strong>Pacientes de Traumatologia que tienen Fonasa</strong></p>')
filtroFonasaTraumatologia.forEach(paciente=>{document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`)})



document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
