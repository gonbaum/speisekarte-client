import React from 'react'
import Item from './Item'

// Receive category and items and filter items that match the category received as prop
// Map items by rendering Item components

const Category = ({ category, items }) => {

    return (
        <div className="Category">
            <h2>{category}</h2>
            <ul>
                {items
                    .filter(item => {return item.category === category})
                    .map((itemData, i) =>
                        <Item itemData={itemData} key={i} /> 
                    )}
            </ul>
        </div>
        
    )
}

export default Category