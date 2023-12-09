import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Movie = mongoose.model('Movie', movieSchema);
