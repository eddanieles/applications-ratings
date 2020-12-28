import React from 'react'
import app from '../base'
import { Link } from 'react-router-dom'

export default function Home() {
    return ( 
    <div>
        <Link to="ratings">Ratings</Link>
        <h1>Home</h1> 
        <button onClick={() => app.auth().signOut() }>Sign Out</button>
    </div>
    )
}