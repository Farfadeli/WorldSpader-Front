import { Link } from "react-router";

export const NavBar = () => {

    return(
        <nav id="navigation-bar">
            <Link className="navigate active" to="/home">Simulation</Link>
            <Link className="navigate" to="/home">Analyse</Link>
            <Link className="navigate" to="/home">Données</Link>
        </nav>
    )
}