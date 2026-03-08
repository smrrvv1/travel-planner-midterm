import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import styles from './AddPlan.module.css'

const AddPlan = () => {
  const [countries, setCountries] = useState<any[]>([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=alpha3Code,name')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const save = () => {
    const country = countries.find(c => c.alpha3Code === selected)
    if (country) {
      const old = JSON.parse(localStorage.getItem('plans') || '[]')
      localStorage.setItem('plans', JSON.stringify([...old, country]))
      alert('Добавлено!')
    }
  }

  return (
    <div className={styles.formBox}>
      <h2 className={styles.title}>Добавить в список</h2>
      <FormControl fullWidth>
        <InputLabel>Страна</InputLabel>
        <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {countries.map(c => (
            <MenuItem key={c.alpha3Code} value={c.alpha3Code}>{c.name}</MenuItem>
          ))
    }
        </Select>
      </FormControl>
      <Button onClick={save} variant="contained" sx={{ mt: '20px' }}>Сохранить</Button>
    </div>
  )
}

export default AddPlan;