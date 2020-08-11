import React from 'react'

export default function MusicCard(props) {
    const {music} = props
    console.log("id", music)
    return (
        <div style={{ backgroundColor:"white", margin:10, padding:5, borderRadius: 20}}>
            <img style={{margin:10}} width="50" height="50" src={music.artist.picture_small} alt="Artist picture" />
            <p style={{marginLeft:10}}>Artist: {music.artist.name} </p>
            <p style={{marginLeft:10}}>Title:{music.title}</p>
            <audio controls src={music.preview}>
                <div style={{border: "1px solid black ", padding: 8}}>
                    Sorry, your browser does not support the audio tag used in this demo.
                </div>
            </audio>
        </div>
    )
}
