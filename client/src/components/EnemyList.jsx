import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EnemyList() {
  const [enemies, setEnemies] = useState([])

  useEffect(() => {
    fetch('/api/enemies')       
      .then(res => res.json()) 
      .then(setEnemies)          
      .catch(console.error)
  }, [])                       

  return (
    <div>
      <h2>Enemies</h2>
      <Link to="/enemies/new">Add New Enemy</Link>
      <ul>
        {enemies.map(e => (
          <li key={e.enemy_id}>
            {e.enemy_name} — ({e.is_ranged ? 'Ranged' : 'Melee'})  {e.experience_points} XP
          </li>
        ))}
      </ul>
    </div>
  )
}