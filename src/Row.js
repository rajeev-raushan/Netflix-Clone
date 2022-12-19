import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css";
const base_url="https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl,IsLargeRow}){
    const [movies,setMovies]=useState([]);
    //a snippet of code which runs based on a specific condition 
    useEffect(()=>{
        //if [],run once when the row loads,and donot run again 

        async function fetchData(){
            const request=await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);

            return request;

        }
        fetchData();

    },[fetchUrl]);
    console.log(movies);

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
              className={`row_poster ${IsLargeRow && "row_LargerPoster"}`}
                src={`${base_url}${
                    IsLargeRow?  movie.poster_path :movie.backdrop_path
                }`} 
                alt={movie.name}
            />
            
            ))}
         </div>

        </div>
    )
}
export default Row;