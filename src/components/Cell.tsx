import React from 'react';
import './Menu.css';

interface CellIntefrace{
    firstName: string,
    lastName: string, 
    img?: string,
    city?: string
}

export const Cell: React.FC<CellIntefrace> = ({ firstName, lastName, img, city }) => {
    return(
        <div className="cell">
            <img className="cellImage" src={img} alt={firstName + "" + lastName} />
            <p className="cellNameAndLastName">{lastName + " " + firstName}</p>
            {city ? <p className="cellCity">{city}</p> : null}
        </div>
    );
}