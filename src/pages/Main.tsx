import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './Main.module.css'

const Main = () => {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('plans') || '[]'))
  }, [])

  return (
    <div>
      <h2>Мои планы</h2>
      {list.map(c => (
        <div key={c.alpha3Code} className={styles.card}>
          <span>{c.name}</span>
          <Button component={Link} to={`/country/${c.alpha3Code}`}>Детали</Button>
        </div>
      ))
      }
    </div>
  )
}

export default Main;