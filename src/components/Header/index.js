import styles from './Header.module.scss';
import headerBg from '../../assets/header-salad.png';

export default function Header() {
  return (
    <div className={styles.header}>
        <img  src={headerBg} alt='Header-bg'/>
        <div className={styles.title}>
          <h1>Saladas,</h1>
          <h1>Iogurtes,</h1>
          <h1>Sucos &</h1>
          <h1>Torradas com Ovo</h1>
        </div>
    </div>
  )
}
