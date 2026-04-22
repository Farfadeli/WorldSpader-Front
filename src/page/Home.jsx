export const Home = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user.username)
    console.log(user.mail)

    return(
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}