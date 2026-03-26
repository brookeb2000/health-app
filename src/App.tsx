import './App.css'
import { getWelcomeMessage } from './utils'

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      fontSize: '2rem' 
    }}>
      {getWelcomeMessage()}
    </div>
  )
}

export default App
