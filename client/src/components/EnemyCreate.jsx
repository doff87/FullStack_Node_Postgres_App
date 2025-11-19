import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EnemyCreate() {
  const [enemy_name, setEnemyName] = useState('')
  const [is_ranged, setRanged] = useState('false')
  const [experience_points, setExperience] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('/api/enemies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enemy_name,
        is_ranged,
        experience_points: parseInt(experience_points)
      })
    })
    if (res.ok) navigate('/enemies')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Enemy</h2>

      <label>
        Enemy Name:
        <input 
            placeholder="Enemy Name" 
            value={enemy_name} 
            onChange={e => setEnemyName(e.target.value)} 
        />
      </label>
      <br />

      <label>
        Ranged:
        <input
        type="checkbox"
          checked={is_ranged}
          onChange={e => setRanged(e.target.value)}
        />
      </label>
      <br />

      <label>
        Experience Points:
        <input
          placeholder="Experience Points"
          type="number"
          checked={experience_points}
          onChange={e => setExperience(e.target.checked)}
        />
      </label>
      <br />
      
      <button type="submit">Create</button>
    </form>
  )
}