import React from 'react'
import MovieNavBar from '../components/NavBar/MovieNavBar.Components'

const MovieLayoutHoc = (Component)=>({...props}) => {
  return (
    <div>
      <MovieNavBar/>
      <Component {...props} />
      <div>Footer</div>
    </div>
  )
}

export default MovieLayoutHoc;