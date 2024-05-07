import React from "react";
import { Link } from "react-router-dom";
function AboutPage(){
    return(
    <div className="text-3xl">
        AboutPage
        <div>
            <Link to={"/about"}>About</Link>
        </div>
    </div>
    )
}
export default AboutPage;