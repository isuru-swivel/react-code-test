import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <Link to={"/"}>
                <h4 className="ms-3">Dungeons & Dragons Spells</h4>
            </Link>
            <Link to={"/favourite"}>
                <span className="me-4">Favourite spells</span>
            </Link>
        </nav>
    )
}

export default Navbar;