const Cursos = require('../models/cursosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const cursos = await Cursos.findAll();
        return resposta.json(cursos);
    },

    async store(req, res) {
       const cursos = await Cursos.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { cur_descricao } = req.body;
        const { cur_area } = req.body;
        await Cursos.update({
            cur_descricao
        }, {
            where: {
                id: codigo_id 
            }
        });
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { codigo_id } = req.params;
        await Cursos.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Curso deletado!!!!'
        })
    },

    async indexId(req, res) {
        const { codigo_id } = req.params;

        const cursos = await Cursos.findByPk(codigo_id)

        return res.json(cursos) 
    },
}