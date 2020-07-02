import React, { useState, useEffect } from 'react'
import './App.css'
import { items } from './db.json'
import Category from './components/Category'

function App() {

  // State: Menu items:
  const [menuItems, setMenuItems] = useState([])

  // State: Categories available: 
  const [categories, setCategories] = useState([""])

  // State: Selected category:
  const [selectedCat, setSelectedCat] = useState("All")

  // Set initial notes and categories from fetched data:
  useEffect(() => {
        setMenuItems(items)
        const itemCategories = items.map(item => item.category)
        setCategories([...new Set(itemCategories)])
  }, [])

  // When user clicks category button it changes the selectedCat state
    const handleClick = (cat) => {
      setSelectedCat(cat)
      console.log(cat)
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Speisekarte</h1> 
        <div className="categories-box">
          <p>Categories:</p>
          <button onClick={ () => handleClick("All") }>All</button>
          {categories.map((cat, i) => <button key={i} onClick={ () => handleClick(cat) }>{cat} </button>)}
        </div>
        </header>
        {selectedCat !== "All" 
          ? <Category items={menuItems} category={selectedCat}/> 
          : categories.map((cat, i) => <Category key={i} items={menuItems} category={cat}/> )
        }

      
    </div>
  )
}

export default App
