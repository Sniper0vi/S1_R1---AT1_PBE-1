import express from "express";
import categoriaRoutes from "./categoria.routes.js";
import produtoRoutes from "./produto.routes.js";

const router = express.Router();

router.use("/produtos", produtoRoutes);
router.use("/categorias", categoriaRoutes);

export default router;