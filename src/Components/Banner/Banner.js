import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../Constants/Constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        console.log('useEffect called!');
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results);
            setMovie(response.data.results[0])
        })
    },[])


  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?movie.name:""}</h1>
            <div className='buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h2 className='description'>{movie?movie.overview:""}</h2>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner
