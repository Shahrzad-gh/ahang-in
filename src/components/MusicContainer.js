import React from 'react'
import MusicCard from "./MusicCard"
export default function MusicContainer(props) {
    const {musicArray} = props;
    console.log("all", musicArray)

    return (
        <div style={{ marginTop:10, display:"grid", gridTemplateColumns:"auto auto auto auto" }}>
            {musicArray && musicArray.data.map((index)=> 
                <div><MusicCard key={index.id} music={index} /></div>
                )
                }
        </div>
    )
}
