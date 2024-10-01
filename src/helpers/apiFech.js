import { Await } from "react-router-dom"

const url = "https://api.giphy.com/v1/gifs/trending?api_key=7pELAXCzRBxNV2jJ9RQbrFkR1klVJHgs"

//Funcion para traer los gifs (Api)

export const getTrendingGifs= async()=>{
try{
    // se ejecuta el metodo Fetch
    const resp = await fetch(url)
    //desestruro data y devuelvo la resp en formato json
    const {data} = await resp.json()
    //muestra data
    return data

}  catch(error) {
    console.log(error)
}
}