import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddPlan from './pages/AddPlan'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={styles.container}>
        <Routes>
          <Route path="/add" element={<AddPlan/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;