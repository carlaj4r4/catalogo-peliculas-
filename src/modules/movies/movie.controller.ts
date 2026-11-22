import { Request, Response } from "express";
import * as movieService from "./movie.service";
export const getAllMovies = async (
  req: Request,
  res: Response
) => {
  try {
    const movies =
      await movieService.getAllMovies();

    res.status(200).json(movies);

  } catch (error) {

    res.status(500).json({
      message: "Error interno"
    });

  }
};

export const getMovieById = async (
  req: Request,
  res: Response
) => {
  try {

    const movie =
  await movieService.getMovieById(
    req.params.id as string
  );

    res.status(200).json(movie);

  } catch (error: any) {

    res.status(404).json({
      message: error.message
    });

  }
};

export const createMovie = async (
  req: Request,
  res: Response
) => {
  try {

    const movie =
      await movieService.createMovie(
        req.body
      );

    res.status(201).json(movie);

  } catch (error: any) {

    res.status(400).json({
      message: error.message
    });

  }
};
export const updateMovie = async (
  req: Request,
  res: Response
) => {
  try {

   const movie = await movieService.updateMovie(
  req.params.id as string,
  req.body
);

res.status(200).json(movie);

  } catch (error: any) {

    res.status(400).json({
      message: error.message
    });

  }
};
export const deleteMovie = async (
  req: Request,
  res: Response
) => {
  try {

  await movieService.deleteMovie(
  req.params.id as string
);

    res.status(200).json({
      message: "Película eliminada"
    });

  } catch (error: any) {

    res.status(404).json({
      message: error.message
    });

  }
};