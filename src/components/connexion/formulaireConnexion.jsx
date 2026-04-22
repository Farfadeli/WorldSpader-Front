import { useNavigate } from "react-router"

export const FormulaireConnexion = () => {

    const Navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const target = event.target

        const json_data = {
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
            username : json_data.username,
            mail : json_data.mail
        }));

        if (data.success) Navigate("/home")

    }

    return(
        <div id="formulaire-inscription">
            <h2>CONNEXION</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">E-mail</label>
                <input type="mail" name="mail"/>
                <label htmlFor="">Mot de passe</label>
                <input type="password" name="pwd"/>
                <button type="submit">CONNEXION</button>
            </form>
        </div>
    )
}