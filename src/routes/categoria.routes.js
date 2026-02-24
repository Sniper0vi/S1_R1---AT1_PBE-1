import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.post("/criar", categoriaController.criarCategoria);
categoriaRoutes.get("/listar", categoriaController.listarCategorias);
categoriaRoutes.put("/atualizar/:id", categoriaController.atualizarCategoria);

export default categoriaRoutes;