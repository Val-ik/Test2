const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'equipment'

// GET consultar coleccion de equipos
router.get('/', (req, res, next) => {
  let equipment = DB.select('equipment')
  res.status(200).send(equipment)
});

// GET consultar equipo especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let equipment = DB.select('equipment', id)
  res.status(200).send(equipment)
});

// POST insertar equipo
router.post('/', (req, res, next) => {
  let user = DB.insert('equipment', req.body)
  res.status(200).send(equipment)
})

// PUT actualizar equipo
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let user = DB.update('equipment', object)
  res.status(200).send(equipment)
})

// DELETE borrar equipo
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.remove('equipment', id)
  res.status(200).send(equipment)
})

module.exports = router;
