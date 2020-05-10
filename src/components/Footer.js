import React from 'react'

export default function Footer(){
  return (
    <div className='fixed-bottom container bg-dark text-light' style={{textAlign: 'center', paddingTop:10}} >
      <p style={{fontSize:20}}>Powered by
        <i> <a  className="text-light" href="https://www.themealdb.com/api.php">themealdb.com</a> </i>
      & <i> <a  className="text-light" href="https://thebhushanmhatre.herokuapp.com/">Bhushan Mhatre</a></i>
      </p>
    </div>
  )
}