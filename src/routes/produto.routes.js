import { Router } from "express";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post('/criar', uploadImage, produtoController.criarProduto );
produtoRoutes.put('/atualizar/:id', uploadImage, produtoController.atualizarProduto);
produtoRoutes.get('/listar', produtoController.listarProdutos);

export default produtoRoutes;