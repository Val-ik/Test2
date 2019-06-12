const name = 'equipment'

let schema = {
    id: 'number',
    nombre: 'string',
	numSerie: 'string',
    ubicacion: 'string',
	fechaEntrada:'string',
	fechaCalibracion:'string'
}

// contenido inicial
let data = [
    {
		id: 1,
		nombre: "fluke",
		numSerie: "24813-001",
		ubicacion: "Metrologia",
		fechaEntrada:"24/05/2018",
		fechaCalibracion:"01/06/2019"
    }
]

module.exports = {
    schema,
    data,
}
