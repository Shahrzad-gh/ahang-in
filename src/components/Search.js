import React from 'react'

export default function Search() {
    return (
        <div style={{ marginTop:50,
            display:"flex", 
            justifyContent:"center", 
            alignItems: "center"}}>
            <input style={{ padding:10}} type="text" placeholder="Search Music"/>
            <button style={{ padding:10}} type="submit" value="search">Search
                {/* <i className="fa fas-search"></i> */}
            </button>
            
        </div>
    )
}
