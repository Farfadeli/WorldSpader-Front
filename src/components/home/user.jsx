export const User = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    return(
        <h3 id="user-username">{user.username}</h3>
    )
}