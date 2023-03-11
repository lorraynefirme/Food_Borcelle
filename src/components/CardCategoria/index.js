import styles from './CardCategoria.module.scss';
import { useNavigate } from 'react-router-dom';


export default function CardCategoria({src, titulo, categoria}) {
  const navigate = useNavigate();

  return (
    <div className={styles.cardCategoria} >
        <h3>{titulo}</h3>
        <img src={src} alt='categoria-salada'/>
        <button  onClick={() => navigate(`/categoria/${categoria}`)}>Ver mais</button>
    </div>
  )
}
