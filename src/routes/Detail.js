import React from "react";
import Movie_detail from "../components/Movie_detail";

class Detail extends React.Component{
    componentDidMount(){
        // console.log(this.props);
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        const poster = location.state.poster;
        const title = location.state.title;
        const year = location.state.year;
        const rating = location.state.rating;
        const genres = location.state.genres;
        const summary = location.state.summary;

        if(location.state){
            return (
                <div className="movies">
                    {
                    <Movie_detail 
                        poster={poster} 
                        year={year}
                        title={title}
                        genres={genres}
                        rating={rating} 
                        summary={summary}
                    />
                    }
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;