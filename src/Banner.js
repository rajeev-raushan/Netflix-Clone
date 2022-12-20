import react, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import "./banner.css"

function Banner(){
    const [movie,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            return requests;
        }
        fetchData();
    },[])

   function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
   }


    return(
       <header className='banner'
       style={{
       backgroundSize:'cover',
       backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       backgroundPosition:"center center",
       }}>
       <div className='banner-content'>
     <h1 className='banner_tiltle'>  
        {movie?.title||movie?.name||movie?.original_name}
     </h1>



    {/* backgroun dimage */}
        {/* title */}
        {/* div and my list */}
        {/* discription */}
       </div>
   <div className='banner_buttons'>
   <button className='banner_button'>play</button>
   <button className='banner_button'>mylist</button>

   </div>
   <div>
    <h1  className="banner-desciption ">{movie?.overview}</h1>
   </div>
   <div  className='banner-fadebottom'/>
      
       </header>
    )
}
export default Banner;