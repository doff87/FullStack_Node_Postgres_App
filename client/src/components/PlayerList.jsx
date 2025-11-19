import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PlayerList() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('/api/players')       
      .then(res => res.json()) 
      .then(setPlayers)          
      .catch(console.error)
  }, [])                       

  return (
    <div>
      <h2>Players</h2>
      <Link to="/players/new">Add New Player</Link>
      <ul>
        {players.map(p => (
          <li key={p.player_id}>
            {p.username} — {p.level} level ({p.is_online ? 'Online' : 'Offline'})
          </li>
        ))}
      </ul>
    </div>
  )
}