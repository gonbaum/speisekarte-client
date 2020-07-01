import React, { useState, useEffect } from 'react'
import './App.css'
import { items } from './db.json'
import Category from './components/Category'

function App() {

  // State for loaded items:

  const [menuItems, setMenuItems] = useState([])

  // Fetch initial notes:

  useEffect(() => {
        setMenuItems(items)
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Speisekarte</h1>
      <Category items={menuItems} category="food"/>
      <Category items={menuItems} category="coffee"/>
      </header>
    </div>
  )
}

export default App
