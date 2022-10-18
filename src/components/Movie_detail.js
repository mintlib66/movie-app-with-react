import React from 'react'
import { Link } from 'react-router-dom'
import './Movie_detail.css'

function MovieDetail({ poster, year, title, genres, rating, summary }) {
  return (
    <div className="movie-detail">
      <img
        src={poster}
        className="movie-detail__poster"
        alt={title}
        title={title}
      />
      <div className="movie-detail__data">
        <h3 className="movie-detail__title">{title}</h3>
        <h5 className="movie-detail__year">{year}</h5>
        <span className="movie-detail__rating">
          {getRatingStars({ rating })} {rating}
        </span>
        <ul className="movie-detail__genres">
          {!genres ? (
            <li className="genres__genre"></li>
          ) : (
            genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))
          )}
        </ul>
        <p className="movie-detail__summary">{summary}</p>
      </div>
      <Link
        to={{
          pathname: './',
        }}
        className="movie-detail__back"
      >
        Back
      </Link>
    </div>
  )
}

function getRatingStars(rating) {
  let stars = ''
  rating = rating.rating
  for (let i = 0; i < 5; i++) {
    rating -= 2
    if (rating >= 0) {
      stars += '★'
    } else {
      stars += '☆'
    }
  }
  return stars
}

export default MovieDetail
