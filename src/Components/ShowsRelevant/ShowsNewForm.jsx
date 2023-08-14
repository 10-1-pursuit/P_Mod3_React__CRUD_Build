import { useState } from "react"


const ShowsNewForm =( props )=>{


    const [newCountry, setNewCountry] = useState( "" )
    const [newReleaseYear, setNewReleaseYear] = useState( 1900 )
    const [newRating, setNewRating] = useState( "" )
    const [newDuration, setNewDuration] = useState( "" )
    const [newListedIn, setNewListedIn] = useState( "" )
    const [newTitle, setNewTitle] = useState( "" )
    const [newDescription, setNewDescription] = useState( "" )

    // !!  NOTE TO SAME: cool controlled form feature 


    function handleNewShowFormSubmit(e){
        e.preventDefault()

        const newShowObj = {
            // hard set K:V s
            id: crypto.randomUUID(),
            type: "TV Show",
            dateAdded: "",

            country: newCountry,
            releaseYear: newReleaseYear,
            rating: newRating,
            duration: newDuration,
            listedIn: newListedIn,
            title: newTitle,
            description: newDescription

        }
        console.log("newShowObj we are CREATING: ", newShowObj)


        // POST : [C]RUD ::  CREATE
            const options = {

                method: "POST",
                headers: {
                    Accept: "application.json",
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify( newShowObj )

            }
        fetch( "http://localhost:8888/api/shows" , options )
            .then( r => r.json())
            .then( console.log )
            .catch( err => console.log(err))


        ////  "Clearing The Form Inputs"
        setNewCountry( "" )
        setNewReleaseYear( 1900 )
        setNewRating( "" )
        setNewDuration( "" )
        setNewListedIn( "" )
        setNewTitle( "" )
        setNewDescription( "" )

    }


    return(<>
        <h1>Create a New Show! 📺</h1>

        <form onSubmit={ handleNewShowFormSubmit } >

            <label for="country">
                Country for Show:
                <input type="text" id="country" value={newCountry} onChange={ (se)=>{ setNewCountry(se.target.value)} } />
            </label>< br/>         
            <label for="releaseYear">
                Release Year of Show:
                <input type="number" id="releaseYear" value={newReleaseYear} onChange={ (se)=>{ setNewReleaseYear(se.target.value)} } />
            </label>< br/>
            <label for="rating">
            Rating for Show:
                <input type="text" id="rating" value={newRating} onChange={ (se)=>{ setNewRating(se.target.value)} } />
            </label>< br/>
            <label for="duration">
            Duration of Show:
                <input type="text" id="duration" value={newDuration} onChange={ (se)=>{ setNewDuration(se.target.value)} } />
            </label>< br/>
            <label for="listedIn">
                Genres Show is Listed:
                <input type="text" id="listedIn" value={newListedIn} onChange={ (se)=>{ setNewListedIn(se.target.value)} } />
            </label>< br/>
            <label for="title">
                Title of Show:
                <input type="text" id="title" value={newTitle} onChange={ (se)=>{ setNewTitle(se.target.value)} } />
            </label>< br/>
            <label for="description">
                Description for Show:
                <input type="text" id="description" value={newDescription} onChange={ (se)=>{ setNewDescription(se.target.value)} } />
            </label>< br/>

            <input type="submit" />

        </form>
    </>)

}

export default ShowsNewForm


/* 


    {
    
      // dont need <inputs />
      "id": "SLHUwyN",
      "type": "TV Show",
      "dateAdded": "",


      "title": "Scream Queens",
      "country": "United States",
      "releaseYear": 2015,
      "rating": "TV-14",
      "duration": "2 Seasons",
      "listedIn": "Comedy, Horror, Mystery",
      "description": "SCREAM QUEENS is a new genre-bending comedy-horror anthology series. The series, produced by 20th Century Fox Television, is from Ryan Murphy, Brad Falchuk, Ian Brennan and Dante Di Loreto, the executive producers of GLEE and “American Horror Story.” The first installment in the new anthology series revolves around a college campus which is rocked by a series of murders."
    },


*/