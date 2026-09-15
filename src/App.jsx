import './App.css'
import Home from './components/Home'
import { useThemeStore } from './stores/theme_store'

function App() {
  const {theme} = useThemeStore();

  return (
    <div data-theme={theme}>
      <Home/>
    </div>
  )
}

export default App
