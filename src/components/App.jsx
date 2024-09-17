import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
