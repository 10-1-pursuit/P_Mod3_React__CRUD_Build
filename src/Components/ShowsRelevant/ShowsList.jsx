import { useEffect, useState } from "react"

import "./ShowsList.css"


const ShowsList =( )=>{

    const [allShows, setAllShows] = useState( [] )
        console.log("State of  allShows: ", allShows)


    useEffect( 
        ()=>{

            // GET : C[R]UD (READ)
            fetch( "http://localhost:8888/api/shows" )
                .then( r => r.json() )
                .then( arr => setAllShows(arr) )
                // .then( console.log )

        } 
        , 
        [ ]     
    )

    const showsToRender = allShows.map( (eachShow)=>
        <div key={eachShow.id} className="show-card-styles">
            <h4>{ eachShow.title }</h4>
            <h6>{ eachShow.duration }</h6>
        </div>
    )


    return( 
            <div className="shows-list-styles">
                <h1>All Shows</h1>

                <div className="display-show-cards">
                    {showsToRender}
                </div>
            </div>
        )
}

export default ShowsList


/* 


    {
      "id": "SLHUwyN",
      "type": "TV Show",
      "title": "Scream Queens",
      "country": "United States",
      "dateAdded": "",
      "releaseYear": 2015,
      "rating": "TV-14",
      "duration": "2 Seasons",
      "listedIn": "Comedy, Horror, Mystery",
      "description": "SCREAM QUEENS is a new genre-bending comedy-horror anthology series. The series, produced by 20th Century Fox Television, is from Ryan Murphy, Brad Falchuk, Ian Brennan and Dante Di Loreto, the executive producers of GLEE and “American Horror Story.” The first installment in the new anthology series revolves around a college campus which is rocked by a series of murders."
    },


*/