export type Movie = {
    id: number;
    originalTitle: string;
    genreIds: number[];
    posterPath: string;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    overview: string;
    mediaType: string;
}