import React from "react";
import Navbar1 from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import People from "./People";
import './style.css'
function ScienceClub(){
    return(
        <div>
            <Navbar1/>
            <h1>Club</h1>
            <div className="peepgroup">
            <div className="peeps">
            <People/>
            <People/>
            <People/>
            <People/>
            </div>
            <div className="peeps">
            <People/>
            <People/>
            <People/>
            <People/>
            </div>
            </div>
            
            
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <h1>Club</h1>
            <h2>Science</h2>
            <Footer/>
        </div>
    )
}

export default ScienceClub;