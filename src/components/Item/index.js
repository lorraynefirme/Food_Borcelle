import styles from './Item.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho';import classNames from 'classnames';
import {
    FaCartPlus
} from 'react-icons/fa';
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai';

const iconeProps = {
    size: 24,
    color: '#041833',
};

const quantidadeProps = {
  size: 32,
  color: '#242424'
}
  

export default function Item(props) {
  const {
    titulo,
    foto,
    preco,
    id,
    carrinho,
    quantidade,
  } = props;

  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));


  return (
    <div  className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
        <div className={styles.containerImg}>
          <img src={foto} alt={titulo}/>
        </div>
       
        <div className={styles.infoItem}>
            <h4>{titulo}</h4>
            <p>R$ {preco}</p>
              {carrinho
              ? (
                <div className={styles.quantidade}>
                  <span>Quantidade:</span>
                  <AiFillMinusCircle
                    {...quantidadeProps}
                    onClick={() => {
                      if(quantidade >= 1) {
                        dispatch(mudarQuantidade({ id, quantidade: -1 }));
                      }
                    }}
                  />
                  <span>{String(quantidade || 0).padStart(2, '0')}</span>
                  <AiFillPlusCircle
                    {...quantidadeProps}
                    onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))}
                  />
                </div>) : null}
            <FaCartPlus {...iconeProps} className={styles.iconeCarrinho} 
             color={estaNoCarrinho ? '#D62828' : iconeProps.color}
            onClick={() => dispatch(mudarCarrinho(id))}/>
        </div>
    </div>
  )
}
