import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
      <Calculator/>
    </div>
    </Provider>
    
  )
}

export default App
