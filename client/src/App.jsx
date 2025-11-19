import { Routes, Route, Link } from 'react-router-dom'
import PlayerList from './components/PlayerList'
import PlayerCreate from './components/PlayerCreate'
import ItemList from './components/ItemList'
import ItemCreate from './components/ItemCreate'
import EnemyList from './components/EnemyList'
import EnemyCreate from './components/EnemyCreate'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Game Dashboard</h1>
      <nav>
        <Link to="/players">Players</Link> |{" "}
        <Link to="/items">Items</Link> |{" "}
        <Link to="/enemies">Enemies</Link>
      </nav>
      <Routes>
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/new" element={<PlayerCreate />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/new" element={<ItemCreate />} />
        <Route path="/enemies" element={<EnemyList />} />
        <Route path="/enemies/new" element={<EnemyCreate />} />
      </Routes>
    </div>
  )
}