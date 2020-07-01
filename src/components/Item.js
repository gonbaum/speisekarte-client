import React from 'react'

const Item = ({ itemData }) => {
    return(
        <div className="menu-item">
            <div className="item-data">
                <li>
                    <span>{itemData.name}</span>
                    <p>{itemData.description}</p>
                    <p>Price: {itemData.price} Eur</p>
                </li>
            </div>
            <div className="item-image">
                <img className="item-image" src={itemData.img} alt={itemData.name}></img>
                <div className="highligted" style={{ display: itemData.highlighted ? null : 'none'}}>Highlighted</div>
            </div>
        </div>

    )
}

export default Item