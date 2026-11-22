import { Schema, model } from "mongoose"; 
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    });
export default model("Movie", movieSchema);