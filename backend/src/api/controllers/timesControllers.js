const Times = require('../models/timesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const times = await Times.findAll();
        return resposta.json(times);
    },

    async store(req, res) {
       const times = await Times.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { tim_descricao } = req.body;
        const { tim_apelido } = req.body;
        await Times.update({
            tim_descricao
        }, {
            where: {
                id: codigo_id 
            }
        });
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async indexId(req, res) {
        const { codigo_id } = req.params;

        const times = await Times.findByPk(codigo_id)

        return res.json(times) 
    },
}