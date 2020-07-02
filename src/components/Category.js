import React from 'react'
import Item from './Item'

const Category = ({ category, items }) => {

    // Receive category and items and filter items that match the category received as prop
    // Map items by rendering Item components:
    const filteredItems = items
                            .filter(item => {return item.category === category})
                            .map((itemData, i) =>
                            <Item itemData={itemData} key={i} />)
    return (
        <div className="Category">
            <h1>{category}</h1> 
            <ul style={{margin: 0, padding: 0}}>
                {filteredItems}
            </ul>
            <h1>---</h1>
        </div>
        
    )
}

export default Category