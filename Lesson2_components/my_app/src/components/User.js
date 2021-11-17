import propTypes from "prop-types";
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
User.propTypes = {
    name: propTypes.string,
    surname: propTypes.string,
    isLoggedIn: propTypes.bool,
    age: propTypes.number,
    friends: propTypes.array
};

export default User