import React, { Component } from 'react';
import "./IdPage.css"

class IdPage extends Component {

  render(){
    let info = this.props.data[this.props.id]
    console.log(info)
    return(
      <div className="parentDiv">
        <div className="almostParent">
          <div className="homie">
            <h3 className="Home">Home</h3>
         </div>
         <div className="Alex">
          <div className="bigBox">
            <div className="infoBox">
            <h1 className="name">{`${info.name.first} ${info.name.last}`} </h1>
            <div className="threeItems">
            <h3 className="personalInfo">From: {info.city}</h3>
            <h3 className="personalInfo2">Job Title: {info.title}</h3>
            <h3 className="personalInfo3">Employer: {info.employer}</h3>
           </div>
           <h3 className="movies">Favorite Movies:
             <ol className="movieItems">
               <li className="mov">{info.favoriteMovies[0]}</li>
               <li className="mov">{info.favoriteMovies[1]}</li>
                <li className="mov">{info.favoriteMovies[2]}</li>
              </ol>
            </h3>
            </div>
            <h1 className="idNumber">{info.id}/25</h1>
            </div>
         </div>
          
         </div>
       </div>
    )
  }


}


export default IdPage