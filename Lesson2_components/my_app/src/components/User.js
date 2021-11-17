function User(props){
    return(
    <h1>
        {props.isLoggedIn
        ? `${props.name} ${props.surname}`
        : "Giriş yapmadınız."}
    </h1>
    );
}
export default User