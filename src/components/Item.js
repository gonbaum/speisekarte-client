import React from 'react'

const Item = ({ itemData }) => {
    return(
        <li className="menuItem">
            <span>{itemData.name}</span>
            <p>{itemData.description}</p>
            <img src={itemData.img} alt={itemData.name}></img>
            <p>Price: {itemData.price} Eur</p>
        </li>
    )
}


export default Item