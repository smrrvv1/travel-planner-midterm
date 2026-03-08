import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { ICountry } from '../types/country' 
import styles from './Main.module.css'

const Main = () => {
  const [list, setList] = useState<ICountry[]>([])

  useEffect(() => {
    const savedPlans = localStorage.getItem('my_travel_plans')
    if (savedPlans) {
      setList(JSON.parse(savedPlans));
    }
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.listContainer}>
        <h2 className={styles.title}>Мои планы</h2>
        
        {list.length === 0 ? (
          <p style={{ textAlign: 'center', color: '' }}>Список пуст. Добавьте страну!</p>
        ) : (
          list.map(c => (
            <div key={c.alpha3Code} className={styles.item}>
              <span className={styles.countryName}>{c.name}</span>
              <Button 
                variant="outlined"
                component={Link} 
                to={`/country/${c.alpha3Code}`}
                className={styles.detailBtn}>
                Детали
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Main;