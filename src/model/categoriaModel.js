import pool from "../config/db.js";

const categoriaModel = {
    criarCategoria : async (descricaoCategoria) => {
        try {
            const [result] = await pool.execute(
                "INSERT INTO categorias (descricaoCategoria) VALUES (?)",
                [descricaoCategoria]
            );
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },
    listarCategorias : async () => {
        try {
            const [rows] = await pool.execute(
                "SELECT * FROM categorias ORDER BY idCategoria DESC"
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },
    buscarPorId : async (idCategoria) => {
        try {
            const [rows] = await pool.execute(
                "SELECT * FROM categorias WHERE idCategoria = ?",
                [idCategoria]
            );
            return rows[0];
        } catch (error) {
            throw error;
        }
    },
    atualizarCategoria : async (idCategoria, descricaoCategoria) => {
        try {
            const [result] = await pool.execute(
                "UPDATE categorias SET descricaoCategoria = ? WHERE idCategoria = ?",
                [descricaoCategoria, idCategoria]
            );
            return result.affectedRows;
        } catch (error) {
            throw error;
        }
    },
}
export default categoriaModel;