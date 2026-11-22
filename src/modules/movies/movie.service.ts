import * as movieRepository from "./movie.repository";
import Movie from "./movie.model";
export const getAllMovies = async () => {
  return await movieRepository.findAll();
};
export const getMovieById = async (
  id: string
) => {

  const movie =
    await movieRepository.findById(id);

  if (!movie) {
    throw new Error(
      "Película no encontrada"
    );
  }

  return movie;
};
export const createMovie = async (
  movieData: any
) => {

  if (
    movieData.score < 1 ||
    movieData.score > 10
  ) {
    throw new Error(
      "El puntaje debe estar entre 1 y 10"
    );
  }

  const existingMovie =
    await Movie.findOne({
      title: movieData.title,
    });

  if (existingMovie) {
    throw new Error(
      "Ya existe una película con ese título"
    );
  }

  return await movieRepository.create(
    movieData
  );
};

export const updateMovie = async (
  id: string,
  movieData: any
) => {

  if (
    movieData.score < 1 ||
    movieData.score > 10
  ) {
    throw new Error(
      "El puntaje debe estar entre 1 y 10"
    );
  }

  const movie =
    await movieRepository.update(
      id,
      movieData
    );

  if (!movie) {
    throw new Error(
      "Película no encontrada"
    );
  }

  return movie;
};

export const deleteMovie = async (
  id: string
) => {

  const movie =
    await movieRepository.remove(id);

  if (!movie) {
    throw new Error(
      "Película no encontrada"
    );
  }

  return movie;
};