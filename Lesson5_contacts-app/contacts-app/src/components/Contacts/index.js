import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullname: 'Mehmet',
            phone_number: "532627"
        },
        {
            fullname: 'Elijah',
            phone_number: "526737"
        },
        {
            fullname: 'Abel',
            phone_number: "436217"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
