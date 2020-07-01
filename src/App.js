import React, { useState, useEffect } from 'react'
import './App.css'
import { items } from './db.json'
import Category from './components/Category'

function App() {

  // State for loaded items:

  const [menuItems, setMenuItems] = useState([])

  // Load categories in state: 
  const [categories, setCategories] = useState(["All"])
  // Selected category in state:
  const [selectedCat, setSelectedCat] = useState(["All"])

  // Fetch initial notes:

  useEffect(() => {
        setMenuItems(items)
        const itemCategories = items.map(item => item.category)
        setCategories([...new Set(itemCategories), "All"])
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Speisekarte</h1>
      {categories.map(cat => <button onClick={(cat) => setSelectedCat(cat)}>{cat} </button>)}
      <Category items={menuItems} category="food"/>
      <Category items={menuItems} category="coffee"/>
      </header>
    </div>
  )
}

export default App
