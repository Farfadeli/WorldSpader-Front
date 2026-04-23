import { useNavigate } from "react-router"

export const FormulaireInscription = () => {

    const Navigate = useNavigate()


    const switchToConnexion = () => (
        Navigate("/connexion")
    )

    const handleSubmit = async (event) => {
        event.preventDefault()

        const target = event.target

        const json_data = {
            "first_name" : target.first_name.value,
            "last_name" : target.last_name.value,
            "username" : target.username.value,
            "mail": target.mail.value,
            "pwd" : target.pwd.value
        }

        let API_CALL = await fetch("http://localhost:7000/auth/inscription", {
            method: "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json_data)
        })

        let data = await API_CALL.json();

        localStorage.setItem("user", JSON.stringify({
            is_connected : true,
            username : json_data.username,
            mail : json_data.mail
        }));

        if (data.success) Navigate("/home")

    }

    return(
        <div id="formulaire-auth">
            <h2>INSCRIPTION</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Prénom</label>
                <input type="text" name="first_name"/>
                <label htmlFor="">Nom</label>
                <input type="text" name="last_name"/>
                <label htmlFor="">Nom d'utilisateur</label>
                <input type="text" name="username"/>
                <label htmlFor="">E-mail</label>
                <input type="mail" name="mail"/>
                <label htmlFor="">Mot de passe</label>
                <input type="password" name="pwd"/>
                <button type="submit">INSCRIPTION</button>
            </form>
            <p>Vous avez déjà un compte ?</p>
            <p onClick={switchToConnexion} id="btn-already-account">Connexion</p>
        </div>
    )
}