import React, { useState, useEffect } from 'react'
import './App.css'
import { items } from './db.json'
import Item from './components/Item'

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
      <ul>
        {menuItems.map((itemData, i) =>
          <Item itemData={itemData} key={i} /> 
        )}
      </ul>
      </header>
    </div>
  )
}

export default App
