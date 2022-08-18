import React from "react";
import './style.css'

export default function NavBar(){
    return(
        <div className="nav-bar">
            <div id="logo">Logo</div>
            <div>menu 1</div>
            <div>menu 2</div>
            <div>menu 3</div>
            <div><img width="25px"></img><input type="text" placeholder="Search Bar" /><button>search</button></div>
        </div>
    )
}