import categoriaModel from "../model/categoriaModel.js";

const categoriaController = {

    criarCategoria: async (req, res) => {
        try {
            const { descricaoCategoria } = req.body;

            if (!descricaoCategoria) {
                return res.status(400).json({
                    message: "Descrição da categoria é obrigatória"
                });
            }

            const idCategoria = await categoriaModel.criarCategoria(
                descricaoCategoria
            );

            return res.status(201).json({
                message: "Categoria criada com sucesso",
                id: idCategoria
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar categoria",
                error: error
            });
        }
    },
    listarCategorias: async (req, res) => {
        try {
            const categorias = await categoriaModel.listarCategorias();

            return res.status(200).json(categorias);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao listar categorias"
            });
        }
    },
    buscarCategoriaPorId: async (req, res) => {
        try {
            const { id } = req.params;

            const categoria = await categoriaModel.buscarPorId(id);

            if (!categoria) {
                return res.status(404).json({
                    message: "Categoria não encontrada"
                });
            }
            return res.status(200).json(categoria);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao buscar categoria"
            });
        }
    },
    atualizarCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            const { descricaoCategoria } = req.body;

            if (!descricaoCategoria) {
                return res.status(400).json({
                    message: "Descrição da categoria é obrigatória"
                });
            }
            const atualizado = await categoriaModel.atualizarCategoria(
                id,
                descricaoCategoria
            );
            if (atualizado === 0) {
                return res.status(404).json({
                    message: "Categoria não encontrada"
                });
            }
            return res.status(200).json({
                message: "Categoria atualizada com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar categoria"
            });
        }
    },
};

export default categoriaController;