const produtoController = {
    create: async (req, res) => {
        try {
            const { nome, quantidade, preco } = req.body;
 
            if (!nome || !quantidade || !preco) {
                return res.status(400).json({
                    msg: "Faltou enviar os campos"
                })  
            }
 
            return res.status(201).json({
                msg: "Produto criado com sucesso"
            })
 
 
        } catch (error) {
            return res.status(500).json({
                msg: "Deu um erro no sistema"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
 
            if (!id) {
                return res.status(400).json({
                    msg:"Pendente o id"
                })
            }
           
        } catch (error) {
           return res.status(500).json({
            msg: "Ocorreu um erro ao criar o Produto"
           })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, quantidade, preco } = req.body;
 
            if (!id || !nome || !quantidade || !preco) {
                return res.status(400).json({
                    msg: "Pendente campos"
                })
            }
 
 
            return res.status(200).json({
                msg: "Produto atualizado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    },
    getAll: async (req, res) => {
        try {
 
            return res.status(200).json({
                msg: "Produto encontrados",
                produtos: []
            })
           
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
           
        }
    }
}
 
module.exports = produtoController;