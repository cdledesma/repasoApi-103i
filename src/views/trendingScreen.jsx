import {useState, useEffect} from 'react'
import {getTrendingGifs} from '../helpers/apiFech'

const TrendingScreen = ()=>{

const {gifs,setgifs} = useState()

useEffect(()=>{
    getTrendingGifs().then(response=>setgifs(response))
},[])
return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Trending Gifs</h1>
                </div>
            </div>
        </div>

)    
}

export default TrendingScreen