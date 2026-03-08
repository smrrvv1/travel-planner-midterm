import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.link}>Главная</Link>
      <Link to="/add" className={styles.link}>Добавить страну</Link>
    </nav>
  )
}

export default Navbar;