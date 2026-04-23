import { useNavigate } from "react-router"

export const FormulaireConnexion = () => {

    const Navigate = useNavigate()

    const switchToInscription = () => {
        Navigate("/inscription")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const target = event.target

        const json_data = {
            "mail": target.mail.value,
            "pwd" : target.pwd.value
        }

        let API_CALL = await fetch("http://localhost:7000/auth/connexion", {
            method: "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json_data)
        })

        let data = await API_CALL.json();

        const userData = data.user

        localStorage.setItem("user", JSON.stringify({
            is_connected : true,
            username: userData.username,
            mail : userData.mail
        }))

        if (data.success) Navigate("/home")

    }

    return(
        <div id="formulaire-auth">
            <h2>CONNEXION</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">E-mail</label>
                <input type="mail" name="mail"/>
                <label htmlFor="">Mot de passe</label>
                <input type="password" name="pwd"/>
                <button type="submit">CONNEXION</button>
                <p>Vous n'avez pas de compte ?</p>
                <p onClick={switchToInscription} id="btn-already-account">Inscription</p>
            </form>
        </div>
    )
}