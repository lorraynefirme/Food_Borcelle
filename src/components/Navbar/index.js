import styles from './Navbar.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill,
} from 'react-icons/ri';

const iconeProps = {
  color: '#52796f',
  size: 24
}

export default function Navbar() {
  return (
    <nav className={styles.nav} >
        <div>
            <img src={logo} alt='logo' className={styles.logo}/>
        </div>
        <ul className={styles.container}>
            <Link to='/'>Home</Link>
            <Link to='/'>Menu</Link>
            <Link to='/'>Sobre</Link>
            <Link to='/carrinho'>       
              <RiShoppingCart2Line {...iconeProps} className={styles.iconeCarrinho} />
            </Link>
        </ul>
    </nav>
  )
}
