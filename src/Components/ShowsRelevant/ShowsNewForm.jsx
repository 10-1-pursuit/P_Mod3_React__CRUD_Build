

const ShowsNewForm =( props )=>{

    // NOTE TO SAME: cool controlled form feature 


    function handleNewShowFormSubmit(){
        // defaults ; ids + "TV Show"
    }


    return(<>
        <h1>Create a New Show! 📺</h1>

        <form onSubmit={  (se)=>{ se.preventDefault() }  } >

            <label for="title">
                Title of Show:
                <input id="title" onChange={ ()=>{} } />
            </label>

            <input type="submit" />

        </form>
    </>)

}

export default ShowsNewForm


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