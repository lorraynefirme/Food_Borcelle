import styles from './Footer.module.scss'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
  } from 'react-icons/fa';
  
  const iconeProps = {
    color: 'white',
    size: 24,
  }
  

export default function Footer() {
  return (
   <footer className={styles.footer}>
    
        <ul className={styles.info}>
            <li>Rua Ali, Número 990, Rio de Janeiro - RJ</li>
            <li>borcelle@contato.com</li>
            <li>+55 21 9999-9999</li>
        </ul>

   
    <div>
        <FaFacebook {...iconeProps} className={styles.icone}/>
        <FaTwitter {...iconeProps} className={styles.icone}/>
        <FaInstagram {...iconeProps} className={styles.icone}/> 
    </div>

    </footer>
  )
}
