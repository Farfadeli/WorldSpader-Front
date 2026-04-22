import { useNavigate } from "react-router"

export const HomeButton = () => {

    const Navigate = useNavigate()

    const GoToInscription = () => {
        Navigate("/inscription")
    }
    const GoToConnexion = () => {
        Navigate("/connexion")
    }

    return(
        <div id="btn-not-connected">
            <h3 className="btn" onClick={GoToInscription}>Inscription</h3>
            <h3 className="btn" onClick={GoToConnexion}>Connexion</h3>
        </div>
    )
}