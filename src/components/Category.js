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
            <h1 id="line-separator">---</h1>
            <ul style={{marginTop: 0, padding: 0}}>
                {filteredItems}
            </ul>
        </div>
        
    )
}

export default Category