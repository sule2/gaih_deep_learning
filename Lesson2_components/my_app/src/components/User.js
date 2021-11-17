import propTypes from "prop-types";
function User({name, surname, age, isLoggedIn, friends, address}){
    if(!isLoggedIn){
        return <div>Giriş yapmadınız.</div>;
    }
    return(
        <div>
            <h1>{`${name} ${surname} (${age}) `}</h1>
            {address.title} {address.zip}
            <br/>
            <br/>
            {
            friends.map((friend) => {
                
                return <div key={friend.id} >{friend.id}){friend.name}</div>
            })
            }
        </div>
    );
}
User.propTypes = {
    name: propTypes.string.isRequired,//gönderilmezse undefined yazar
    surname: propTypes.string.isRequired,
    isLoggedIn: propTypes.bool.isRequired,
    age: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    friends: propTypes.array,
    address: propTypes.shape({
        title: propTypes.string,
        zip: propTypes.number
    })
};

User.defaultProps = {
    name: "Anonim",
    isLoggedIn: false
}

export default User