import Movie from "./movie.model";
export const findAll = async () => {
    return await Movie.find();
};
export const findById = async (id: string) => {
    return await Movie.findById(id);
};
export const create = async (movieData: any) => {
    return await Movie.create (movieData);
};
export const update = async (
  id: string,
  movieData: any
) => {
  return await Movie.findByIdAndUpdate(
    id,
    movieData,
    { new: true }
  );
};

export const remove = async (id: string) => {
  return await Movie.findByIdAndDelete(id);
}