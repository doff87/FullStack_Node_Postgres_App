import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlayerCreate() {
  const [username, setUsername] = useState('')
  const [level, setLevel] = useState('')
  const [is_online, setOnline] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('/api/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        level: parseInt(level),
        is_online
      })
    })
    if (res.ok) navigate('/players')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Player</h2>

      <label>
        Username:
        <input 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
        />
      </label>
      <br />

      <label>
        Level:
        <input
          placeholder="Level"
          type="number"
          value={level}
          onChange={e => setLevel(e.target.value)}
        />
      </label>
      <br />

      <label>
        Online?
        <input
          type="checkbox"
          checked={is_online}
          onChange={e => setOnline(e.target.checked)}
        />
      </label>
      <br />

      <button type="submit">Create</button>
    </form>
  )
}