import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';
import styles from './Categoria.module.scss';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const tituloCategoria = nomeCategoria[0].toUpperCase() + nomeCategoria.substring(1);

  const { itens } = useSelector(state => {
    return {
      itens: state.itens.filter(item => item.categoria === nomeCategoria)
    }
  });


  return (
    <div className={styles.categoria}>
      <div className={styles.titulo}>
        <h1>{tituloCategoria}</h1>
      </div>

      <div className={styles.itens}>
        {itens.map(item => <Item key={item.id} {...item}/>)}
      </div>
       
    </div>
  )
}

