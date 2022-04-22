import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard(contacts) {

    return (<Card
        key={contacts.id}
        id={contacts.id}
        name={contacts.name}
        src={contacts.imgURL}
        phone={contacts.phone}
        info={contacts.email} />);
}



function App() {
    return (

        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
