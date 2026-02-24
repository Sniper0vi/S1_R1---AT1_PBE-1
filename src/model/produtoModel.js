import pool from "../config/db.js";

const produtoModel = {

    criarProduto: async (nomeProduto, valorProduto, idCategoria, vinculoImagem) => {
        try {
            const [result] = await pool.execute(`INSERT INTO produtos 
                (idCategoria, nomeProduto, valorProduto, vinculoImagem) 
                VALUES (?, ?, ?, ?)`,[idCategoria, nomeProduto, valorProduto, vinculoImagem]);
            return result;
            
        } catch (error) {
            throw error;
        }
    },
    listarProdutos: async () => {

        try {
            const [rows] = await pool.execute(
                `SELECT * FROM produtos ORDER BY idProduto DESC`
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },
    buscarPorId: async (idProduto) => {

        try {
            const [rows] = await pool.execute(
                `SELECT 
                    p.*,
                    c.descricaoCategoria
                 FROM produtos p
                 INNER JOIN categoria c
                 ON p.idCategoria = c.idCategoria
                 WHERE p.idProduto = ?`,
                [idProduto]
            );
            return rows[0];
        } catch (error) {
            throw error;
        }
    },
    atualizarProduto: async (idProduto, nomeProduto, valorProduto, idCategoria, vinculoImagem) => {
        try {

        } catch (error) {
            
        }

    },
};

export default produtoModel;