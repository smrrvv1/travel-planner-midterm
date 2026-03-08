import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICountry } from '../types/country'

const CountryDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState<ICountry | null>(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [id])

  if (!item) return <p>Загрузка..</p>

  return (
    <div style={{ backgroundColor: 'white', padding: '30px' }}>
      <h1>{item.name}</h1>
      <img src={item.flag} width="200px" alt="flag" />
      <p><b>Оригинальное имя:</b> {item.nativeName}</p>
      <p><b>Столица:</b> {item.capital}</p>
      <p><b>Регион:</b> {item.region}</p>
      <p><b>Субрегион:</b> {item.subregion}</p>
      <p><b>Население:</b> {item.population} чел.</p>
      <p><b>Площадь:</b> {item.area} км²</p>
      <p><b>Код страны:</b> {item.alpha3Code}</p>
      <p><b>Числовой код:</b> {item.numericCode}</p>
      <p><b>Домен:</b> {item.numericCode}</p> 
      <p><b>Тип:</b> Country</p> 
    </div>
  )

}
export default CountryDetail;