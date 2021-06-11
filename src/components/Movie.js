import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({poster, year, title, genres, rating, summary}){
    return (
        <Link to={{
            pathname: './movie-detail',
            state: {
                poster,
                year,
                title,
                genres,
                rating,
                summary
            }
        }} className="movie-link" >
            <div className="movie">
                <img src={poster} className="movie__poster" alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <span className="movie__rating">
                        {getRatingStars({rating})} {rating}
                    </span>
                    <ul className="movie__genres">
                        {(!genres) ? (
                            <li className="genres__genre"></li>
                        ):(
                            genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        )))}
                    </ul>
                    <p className="movie__summary">
                        {summary.slice(0, 140)}...
                    </p>
                </div>
            </div>
        </Link>
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
    genres: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;