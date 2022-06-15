import './App.css'
import { Login, Profile } from './components'
import { ChangeColor } from './components/ChangeColor'

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  )
}

export default App
