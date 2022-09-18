import React from 'react'
import './Banner.css'
function Banner() {
    return (
    <div className="banner">
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">play</button>
                <button className="button">My List</button>

            </div>
            <h1 className="description">Unlimited movies, TV shows and more. </h1>
       </div>
       <div className="fade"></div>


    </div>
  )
}

export default Banner