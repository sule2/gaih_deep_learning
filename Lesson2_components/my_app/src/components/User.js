function User({name, surname, age, isLoggedIn, friends}){
    return(
        <div>
            <h1>{isLoggedIn ? `${name} ${surname} ${age} yaşında.` : "Giriş yapmadınız."}</h1>
            {
            friends.map((friend) => {
                
                return <div key={friend.id} >{friend.id}){friend.name}</div>
            })
            }
        </div>
    );
}
export default User