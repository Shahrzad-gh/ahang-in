import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import MusicContainer from "./MusicContainer"
export default function Search() {
    const [music, setMusic]= useState(null);
    const [allMusic, setAllMusic]= useState(null)
    function handleChange(e){
        console.log(e.target.value)
        setMusic(e.target.value)
        console.log("music", music)
    }

    function handleSearch(){
        console.log("search",music)
        axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${music}&rapidapi-key=f3609fc850mshfc0c95c7c954174p110853jsne40130485136`)
        .then(response => {
            console.log(response);
            setAllMusic(response.data)
            
        })
        .catch(err => {
	        console.log(err);
        });
    }

    return (
        <div>
        <div style={{ marginTop:50,
            display:"flex", 
            justifyContent:"center", 
            alignItems: "center"}}>
            <input onChange={handleChange} style={{ padding:10}} type="text" placeholder="Search Music"/>
            <button onClick={handleSearch} style={{ padding:10}} type="submit">Search
                {/* <i className="fa fas-search"></i> */}
            </button>
        </div>
        <div>
        <MusicContainer musicArray={allMusic}/>
        </div>
        </div>
    )
}
