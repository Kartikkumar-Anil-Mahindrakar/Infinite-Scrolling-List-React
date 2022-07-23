import React from "react";
const Card = ({ contact }) => {
    return (
      <li className="card">
          <img src={contact.picture.large} alt={contact.name.first} className="contact-image" />
          <h4 className="contact-name">{contact.name.first} {contact.name.last}</h4>        
      </li>
    );
  };
  export default Card;
