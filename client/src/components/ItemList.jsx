import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/items')       // ① call your Express GET endpoint
      .then(res => res.json()) // ② parse JSON response
      .then(setItems)          // ③ store data in state
      .catch(console.error)
  }, [])                       // ④ run once on mount

  return (
    <div>
      <h2>Game Items</h2>
      <Link to="/items/new">Add New Item</Link>
      <ul>
        {items.map(i => (
          <li key={i.item_id}>
            {i.item_name} — {i.value_coins} coins ({i.weight_kg} kg)
          </li>
        ))}
      </ul>
    </div>
  )
}