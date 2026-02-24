import produtoModel from "../model/produtoModel.js";

const produtoController = {

    upload: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'Arquivo não encontrado' });
            }

            res.status(200).json({
                message: 'Arquivo enviado com sucesso',
                file: {
                    filename: req.file.filename,
                    size: req.file.size,
                    mimetype: req.file.mimetype
                }
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Ocorreu um erro no servidor" });
        }
    },

    criarProduto: async (req, res) => {
        try {
            const { nomeProduto } = req.body;
            const valorProduto = Number(req.body.valorProduto);
            const idCategoria = Number(req.body.idCategoria);
            const vinculoImagem = req.file ? req.file.filename : null;

            if (!nomeProduto || !valorProduto || !idCategoria) {
                return res.status(400).json({ message: "Dados incompletos ou inválidos" });
            }

            const idProduto = await produtoModel.criarProduto(
                nomeProduto,
                valorProduto,
                idCategoria,
                vinculoImagem
            );

            res.status(201).json({
                message: "Produto criado com sucesso",
                id: idProduto
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao criar produto" });
        }
    },

    listarProdutos: async (req, res) => {
        try {
            const produtos = await produtoModel.listarProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao listar produtos" });
        }
    },

    buscarProdutoPorId: async (req, res) => {
        try {
            const { id } = req.params;

            const produto = await produtoModel.buscarProdutoPorId(id);

            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            res.status(200).json(produto);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar produto" });
        }
    },

    atualizarProduto: async (req, res) => {
        try {
            const { id } = req.params;

            const { nomeProduto } = req.body;
            const valorProduto = Number(req.body.valorProduto);
            const idCategoria = Number(req.body.idCategoria);

            const vinculoImagem = req.file ? req.file.filename : null;

            if (!nomeProduto || !valorProduto || !idCategoria) {
                return res.status(400).json({ message: "Dados incompletos ou inválidos" });
            }

            const atualizado = await produtoModel.atualizarProduto(
                id,
                nomeProduto,
                valorProduto,
                idCategoria,
                vinculoImagem
            );

            if (atualizado === 0) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            res.status(200).json({ message: "Produto atualizado com sucesso" });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar produto" });
        }
    },

    deletarProduto: async (req, res) => {
        try {

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao deletar produto" });
        }
    }

};

export default produtoController;