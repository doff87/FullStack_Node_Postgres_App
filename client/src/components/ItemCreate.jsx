import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ItemCreate() {
  const [item_name, setName] = useState('')
  const [value_coins, setValue] = useState('')
  const [weight_kg, setWeight] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_name,
        value_coins: parseInt(value_coins),
        weight_kg: parseFloat(weight_kg)
      })
    })
    if (res.ok) navigate('/items') // redirect after success
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Game Item</h2>
      <input placeholder="Item name" value={item_name} onChange={e => setName(e.target.value)} />
      <input placeholder="Value (coins)" type="number" value={value_coins} onChange={e => setValue(e.target.value)} />
      <input placeholder="Weight (kg)" type="number" step="0.1" value={weight_kg} onChange={e => setWeight(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  )
}