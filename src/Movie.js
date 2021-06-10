import React from "react";
import PropTypes from "prop-types";

function Movie({poster, year, title, genres, rating, summary}){
    return (
        <div className="movie">
            <img src={poster} className="movie__poster" alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <span className="movie__rating">
                    {getRatingStars({rating})} {rating}
                </span>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">
                    {summary.slice(0, 140)}...
                </p>
            </div>
        </div>
    );
}

function getRatingStars(rating) {
    let stars = "";
    rating = rating.rating;
    for(let i=0; i<5; i++){
        rating -= 2;
        if(rating >= 0){
            stars += "★";
        }else {
            stars += "☆";
        }
    }
    return stars;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;