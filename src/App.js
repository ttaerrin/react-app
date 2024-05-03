// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
import { dummy } from './movie/movieBummy';
import Movie from './components/Movie';



function App() {
  return(
    <div>
    <div className='app-container'>
      {
        dummy.results.map((item)=> {
          return (
            <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            />
          );
        })
      }
    </div>
    </div>
  );
}

export default App;

