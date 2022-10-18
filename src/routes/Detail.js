import React from 'react'
import MovieDetail from '../components/Movie_detail'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push('/')
    }
  }
  render() {
    const locationState = this.props.location.state
    const poster = locationState.poster
    const title = locationState.title
    const year = locationState.year
    const rating = locationState.rating
    const genres = locationState.genres
    const summary = locationState.summary

    if (locationState) {
      return (
        <div className="movies">
          {
            <MovieDetail
              poster={poster}
              year={year}
              title={title}
              genres={genres}
              rating={rating}
              summary={summary}
            />
          }
        </div>
      )
    } else {
      return null
    }
  }
}

export default Detail
