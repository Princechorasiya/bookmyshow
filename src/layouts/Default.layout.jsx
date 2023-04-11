import React from 'react'
import NavBar from '../components/NavBar/NavBar.Component';

const DefaultLayoutHoc =  (Component)=>({...props}) => {
  return (
    <div>
      <NavBar/>
      
      <Component {...props} />
      <div>Footer</div>
    </div>
  )
}
// rafce//
export default DefaultLayoutHoc;