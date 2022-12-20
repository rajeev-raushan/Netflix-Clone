import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
const base_url="https://image.tmdb.org/t/p/original/";



function Row({title,fetchUrl,IsLargeRow}){
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    //a snippet of code which runs based on a specific condition 
    useEffect(()=>{
        //if [],run once when the row loads,and donot run again 

        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;

        }
        fetchData();

    },[fetchUrl]);

const opts={
    height:"390",
    width:"100%"

}

    const handleclick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            // console.log(movie.title)
            movieTrailer(movie?.title||"")
            
            .then((url)=>{
                // console.log(url);
                const urlParams= new URLSearchParams(new URL(url).search);
                // console.log(urlParams);
            setTrailerUrl(urlParams.get('v'));

            })
            .catch((error)=>console.log(error))
        }
    }

    return(
       
        <div className='row'>
        
         <h1>{title}</h1>
         <div className="row_posters">
            {/* { several row_poster} */}
            {/* {movies.map(movie=>( */}
            {/* <img src={'${base_url}${movie.poster_path}'} alt={movie.name}/> */}
            {movies.map((movie) => (
            <img 
              key={movie.id}
              onClick={()=>handleclick(movie)}
              className={`row_poster ${IsLargeRow && "row_LargerPoster"}`}
                src={`${base_url}${
                    IsLargeRow?  movie.poster_path :movie.backdrop_path
                }`} 
                alt={movie.name}
            />
            
            ))}
         </div>
         {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    )
}
export default Row;