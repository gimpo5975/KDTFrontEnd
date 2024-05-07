import React from "react";
import { Link } from "react-router-dom";

function MainPage(){
    return(
        <div className="text-3xl">

        <div>
            <Link to={"/about"}>About</Link>
        </div>

            <div>MainPage</div>
        </div>
        )
}
export default MainPage;