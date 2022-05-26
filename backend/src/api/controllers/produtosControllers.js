const Produtos = require('../models/produtosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const produtos = await Produtos.findAll();
        return resposta.json(produtos);
    },

    async store(req, res) {
       const produtos = await Produtos.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params;
        const { pro_descricao } = req.body;
        const { pro_vlrcusto } = req.body;
        const { pro_vlrvenda } = req.body;
        const { pro_ativoinativo } = req.body;
        await Produtos.update({
            pro_descricao
        }, {
            where: {
                id: codigo_id 
            }
        });
        return res.json({message: "Registro atualizado com sucesso!"})
    },

    async delete(req, res) {
        const { codigo_id } = req.params;
        await Produtos.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Produto deletado!!!!'
        })
    },

    async indexId(req, res) {
        const { codigo_id } = req.params;

        const produtos = await Produtos.findByPk(codigo_id)

        return res.json(produtos) 
    },
}