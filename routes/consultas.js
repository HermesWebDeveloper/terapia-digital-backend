const express = require('express');
const router = express.Router();
const { Consulta } = require('../models/create_models');
const { Op } = require('sequelize');
const categoryControllers = require('../controllers/consultas');

router.get('/search', categoryControllers.buscarConsultas);

router.get('/filter', categoryControllers.filtrarPorData);

router.get('/:id', categoryControllers.buscarConsultaPeloID);

router.post('/', categoryControllers.criarConsulta);

router.put('/:id', categoryControllers.atualizarConsulta);

router.delete('/:id', categoryControllers.deletarConsulta);

module.exports = router;