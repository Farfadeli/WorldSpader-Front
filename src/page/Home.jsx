import { Background } from "../components/background"
import { User } from "../components/home/user"
import { NavBar } from "../components/navBar"
import { Title } from "../components/Title"

export const Home = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user.username)
    console.log(user.mail)

    return(
        <div id="home-connected">
            <Background/>
            <div id="header">
                <Title/>
                <User/>
            </div>
            <NavBar/>
        </div>
    )
}