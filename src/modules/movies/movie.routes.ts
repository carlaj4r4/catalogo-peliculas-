import { Router } from "express";

import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./movie.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

// Rutas públicas
router.get("/", getAllMovies);
router.get("/:id", getMovieById);

// Rutas protegidas
router.post(
  "/",
  authMiddleware,
  createMovie
);

router.put(
  "/:id",
  authMiddleware,
  updateMovie
);

router.delete(
  "/:id",
  authMiddleware,
  deleteMovie
);

export default router;