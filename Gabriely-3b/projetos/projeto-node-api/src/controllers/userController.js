const userController = {
    create: async (req, res) => {

        // try catch pegue até dar erro
        try {
            const { nome, senha } = req.body

            if (!nome || !senha) {
                return res.status(400).json({
                    msg: "Faltou enviar os campos"
                })
            }
            //Salvamos no banco...
            //201 - Create
            return res.status(201).json({
                msg: "Usuário criado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Deu um erro no sistema"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            if (!id) {
                return res.status(400).json({
                    msg: "Pendente o id"
                })
            }

            //Deletar o usuário
            return res.status(200).json({
                msg: "Usuario deletado com sucesso"
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro ao criar o User"
            })

        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const { nome, senha } = req.body

            if (!id || !nome || !senha) {
                return res.status(400).json({
                    msg: "Pendente campos"
                })
            }
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    },
    gatAll: async (req, res) => {
        try {
            //Busca dos usuarios
            return res.status(200).json({
                msg: "Usuario encontrado",
                usuario: []
            })

        } catch (error) {
            return res.status(500).json({
                msg:"Ocoreu um erro interno",
            })
        }
     }
}

module.exports = userController