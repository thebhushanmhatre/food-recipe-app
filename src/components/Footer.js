import React from 'react'

export default function Footer(){
  return (
    <div className='fixed-bottom container' style={{textAlign: 'center'}} >
      <p style={{fontSize:20}}>Powered by
        <i> <a href="https://www.themealdb.com/api.php">themealdb.com</a> </i>
      & <i> <a href="https://thebhushanmhatre.herokuapp.com/">Bhushan Mhatre</a></i>
      </p>
    </div>
  )
}