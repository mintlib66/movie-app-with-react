import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//extend했음
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {
      data:{
        data: {movies}
        }
     } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
     this.setState({movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
       { isLoading && movies
       ? (<div className="loader">
          <span className="loader__text">Loading...</span>
       </div>
       ) : (
        <div className="movies">
         {movies.map(movie => (
          <Movie 
            key={movie.id} 
            id={movie.id} 
            poster={movie.medium_cover_image} 
            year={movie.year}
            title={movie.title}
            genres={movie.genres}
            rating={movie.rating} 
            summary={movie.summary}
          />
         ))}
        </div>
        )}
      </section>
    );
  }
}

export default App;

