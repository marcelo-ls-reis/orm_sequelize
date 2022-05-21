const express = require('express')
const routes = express.Router()


const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')
const timesControllers = require('../controllers/timesControllers.js')


// rota de categorias
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)
routes.get('/categorias/:codigo_id', categoriasControllers.indexId)

// rota de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)
routes.get('/departamentos/:codigo_id', departamentosControllers.indexId)

// rota de times
routes.get('/times', timesControllers.index)
routes.post('/times', timesControllers.store)
routes.put('/times/:codigo_id', timesControllers.update)
routes.get('/times/:codigo_id', timesControllers.indexId)

module.exports = routes

