function User({name, surname, age, isLoggedIn}){
    return(<h1>{isLoggedIn ? `${name} ${surname} ${age} yaşında.` : "Giriş yapmadınız."}</h1>);
}
export default User