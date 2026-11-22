import express from "express";
import cors from "cors";

import movieRoutes from "./modules/movies/movie.routes";
import authRoutes from "./modules/auth/auth.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/movies", movieRoutes);

app.resource("/auth", authRoutes);

export default app;