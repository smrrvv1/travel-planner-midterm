import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { ICountry } from '../types/country'
import styles from './AddPlan.module.css'

const AddPlan = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=alpha3Code,name')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleSave = () => {
    const country = countries.find(c => c.alpha3Code === selected)
    
    if (country) {
      const saved = localStorage.getItem('my_travel_plans');
      const existingPlans: ICountry[] = saved ? JSON.parse(saved) : []

      if (existingPlans.some(p => p.alpha3Code === country.alpha3Code)) {
        alert('Эта страна уже есть в списке!')
        return;
      }

      const newPlans = [...existingPlans, country]
      localStorage.setItem('my_travel_plans', JSON.stringify(newPlans))

      alert('Страна успешно добавлена в ваши планы!')
      setSelected('')
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Добавить в список</h2>
        
        <FormControl fullWidth>
          <InputLabel>Выберите страну</InputLabel>
          <Select
            value={selected}
            label="Выберите страну"
            onChange={(e) => setSelected(e.target.value as string)}
          >
            {countries.map((c) => (
              <MenuItem key={c.alpha3Code} value={c.alpha3Code}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          onClick={handleSave}
          disabled={!selected}
          sx={{ 
            height: '50px',
            backgroundColor: 'rgb(80, 44, 68)',
            '&:hover': { backgroundColor: 'rgb(100, 60, 85)' }
          }}
        >
          СОХРАНИТЬ
        </Button>
      </div>
    </div>
  )
}

export default AddPlan;