const express = require('express');
const router = express.Router();
const { Consulta } = require('../models/create_models');

router.get('/search', async (req, res) => {
    try {
        const consultas = await Consulta.findAll({
            order: [['consulta_id', 'ASC']],
        });
        res.status(201).json(consultas);
    } catch (error) {
        console.error('Erro ao buscar consultas: ', error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const consulta = await Consulta.findByPk(req.params.id);

        if (!consulta) {
            return res.status(404).json({ erro: 'Consulta não encontrada'});
        };

        res.status(201).json(consulta);
    } catch (error) {
        console.error('Erro ao buscar consulta pelo id: ', error);
    };
});

router.post('/', async (req, res) => {
    try {
        const { nome, data, retorno, qp, hda, prt } = req.body;
        const newConsulta = await Consulta.create({nome, data, retorno, qp, hda, prt});
        res.status(201).json(newConsulta);
    } catch (error) {
        console.error('Erro ao criar consulta: ', error);
    };
});

router.put('/:id', async (req, res) => {
    try {
        const consulta = await Consulta.findByPk(req.params.id);
        const dados = req.body;

        await consulta.update(dads);

        res.json(consulta);
    } catch (error) {
        console.error('Erro ao atualizar consulta: ', error);
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const consulta = await Consulta.findByPk(req.params.id);
        
        await consulta.destroy();

        res.json(consulta);
    } catch (error) {
        console.error('Erro ao excluir consulta: ', error);
    };
});

module.exports = router;