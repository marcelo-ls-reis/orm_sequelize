const express = require('express')
const routes = express.Router()


const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')
const timesControllers = require('../controllers/timesControllers.js')
const cidadesControllers = require('../controllers/cidadesControllers.js')
const cursosControllers = require('../controllers/cursosControllers.js')
const produtosControllers = require('../controllers/produtosControllers.js')
const candidatosControllers = require('../controllers/candidatosControllers.js')
const telefonesControllers = require('../controllers/telefonesControllers.js')


// rota de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)
routes.get('/categorias/:codigo_id', categoriasControllers.indexId)

// rota de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)
routes.get('/departamentos/:codigo_id', departamentosControllers.indexId)
routes.delete('/departamentos/:codigo_id', departamentosControllers.delete)

// rota de times
routes.get('/times', timesControllers.index)
routes.post('/times', timesControllers.store)
routes.put('/times/:codigo_id', timesControllers.update)
routes.get('/times/:codigo_id', timesControllers.indexId)
routes.delete('/times/:codigo_id', timesControllers.delete)

// rota de cidades
routes.get('/cidades', cidadesControllers.index)
routes.post('/cidades', cidadesControllers.store)
routes.put('/cidades/:codigo_id', cidadesControllers.update)
routes.get('/cidades/:codigo_id', cidadesControllers.indexId)
routes.delete('/cidades/:codigo_id', cidadesControllers.delete)

// rota de cursos
routes.get('/cursos', cursosControllers.index)
routes.post('/cursos', cursosControllers.store)
routes.put('/cursos/:codigo_id', cursosControllers.update)
routes.get('/cursos/:codigo_id', cursosControllers.indexId)
routes.delete('/cursos/:codigo_id', cursosControllers.delete)

// rota de produtos
routes.get('/produtos', produtosControllers.index)
routes.post('/produtos', produtosControllers.store)
routes.put('/produtos/:codigo_id', produtosControllers.update)
routes.get('/produtos/:codigo_id', produtosControllers.indexId)
routes.delete('/produtos/:codigo_id', produtosControllers.delete)

// rota de candidatos
routes.get('/candidatos', candidatosControllers.index)
routes.post('/candidatos', candidatosControllers.store)
routes.put('/candidatos/:codigo_id', candidatosControllers.update)
routes.get('/candidatos/:codigo_id', candidatosControllers.indexId)
routes.delete('/candidatos/:codigo_id', candidatosControllers.delete)

// rota de telefones
routes.get('/telefones', telefonesControllers.index)
routes.post('/telefones', telefonesControllers.store)
routes.put('/telefones/:codigo_id', telefonesControllers.update)
routes.get('/telefones/:codigo_id', telefonesControllers.indexId)
routes.delete('/telefones/:codigo_id', telefonesControllers.delete)

module.exports = routes

