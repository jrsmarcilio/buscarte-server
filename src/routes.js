import { Router } from "express";

import ArtistaController from "./app/controllers/ArtistaController";
import AtelieController from "./app/controllers/AtelieController";

const routes = new Router();

routes.get("/artistas", ArtistaController.index);
routes.get("/artistas/:id", ArtistaController.show);

routes.get("/atelie", AtelieController.index);
routes.get("/atelie/:id", AtelieController.show);

export default routes;
