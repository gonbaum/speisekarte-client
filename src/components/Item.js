import React from 'react'

const Item = ({ itemData }) => {
    return(
        <li className="menu-item">
            <div className="item-data">
                    <h2>{itemData.name}&emsp;&emsp;{itemData.price} €</h2>
                    <p>{itemData.description}</p>
                    <p></p>
            </div>
            <div className="item-image" style={{display: 'none'}}>
                <img className="item-image" src={itemData.img} alt={itemData.name}></img>
                <div className="highligted" style={{ display: itemData.highlighted ? null : 'none'}}>Highlighted</div>
            </div>
        </li>
    )
}

export default Item