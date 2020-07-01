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

  // Fetch initial notes:

  useEffect(() => {
        setMenuItems(items)
        const itemCategories = items.map(item => item.category)
        setCategories([...new Set(itemCategories)])

  }, [])

    const handleClick = (cat) => {
      setSelectedCat(cat)
      console.log(cat)
    }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Speisekarte</h1>
      <span>Categories:
        {categories.map((cat, i) => <button key={i} onClick={ () => handleClick(cat) }>{cat} </button>)}
        <button onClick={ () => handleClick("All") }>All</button>
      </span>
      {selectedCat !== "All" ? <Category items={menuItems} category={selectedCat}/> : categories.map((cat, i) => <Category key={i} items={menuItems} category={cat}/> )}
      </header>
    </div>
  )
}

export default App
