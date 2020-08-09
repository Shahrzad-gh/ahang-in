import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <ul style={{listStyle:"none", color:"white"}}>
                        <li style={{border:"1px soild white",marginRight:15, display:"inline-block"}}>
                            SignIn
                        </li>
                        <li style={{marginRight:15, display:"inline-block"}}>
                            SignUp
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
