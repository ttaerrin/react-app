import React from 'react'

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";

export default function Movie ({title, poster_path, vote_average}){
    return (
        <div className = 'movie-container'>
            <img src = {IMG_BASE_URL + poster_path} alt ="영화포스터" />
            <div className = 'movie-info'>
                <h1> {title}</h1>
                <span>{vote_average}</span>
            </div>
        </div>

    )
    
}


//받을 속성들을 다 지정해 놓는 거구나. movie 안에 들어갈 props 들을 