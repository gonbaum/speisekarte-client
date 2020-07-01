import React from 'react'

const Item = ({ itemData }) => {
    return(
        <li className="menu-item">
            <div className="item-data">
                    <span>{itemData.name}</span>
                    <p>{itemData.description}</p>
                    <p>Price: {itemData.price} Eur</p>
            </div>
            <div className="item-image">
                <img className="item-image" src={itemData.img} alt={itemData.name}></img>
                <div className="highligted" style={{ display: itemData.highlighted ? null : 'none'}}>Highlighted</div>
            </div>
        </li>

    )
}

export default Item