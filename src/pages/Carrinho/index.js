import styles from './Carrinho.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../../components/Item';
import { resetarCarrinho } from '../../store/reducers/carrinho';

export default function Carrinho() {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector(state => {
    let total = 0;
    console.log(state.itens)

    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      total += (item.preco * itemNoCarrinho.quantidade);

      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      });

      return itens;
    }, []);

    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  console.log(carrinho)
  return (
    <div className={styles.carrinho}>  
      <h1 className={styles.titulo}>Carrinho</h1>  
      <div className={styles.itens}>
        {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  )
}