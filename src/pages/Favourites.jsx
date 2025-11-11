import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
function Favorite(){
    const {favorites}= useMovieContext();
    if (favorites){
        return(
            <div>
                <div className='movies-grid'>
                    {favorites.map((movie)=>{
                        <MovieCard movie={movie} key={movie.id}>
                            
                        </MovieCard>
                    })}

                </div>
            </div>
        )
    }
    return (
        <div className='favourites-empty'>
            <h2>no Favorite yet</h2>
            <p>Add sonme</p>
        </div>
    )
}

export default Favorite