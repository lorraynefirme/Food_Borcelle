import React from 'react'
import Header from '../../components/Header';
import styles from './Home.module.scss';
import CardCategoria from '../../components/CardCategoria'
import { useSelector } from 'react-redux';


export default function Home() {
  const categorias = useSelector(state => state.categorias)

  return (
    <div className={styles.home}>
        <Header /> 
        <div className={styles.categorias}>
        {categorias.map( 
        item => <CardCategoria key={item.id} src={item.thumbnail} titulo={item.titulo} categoria={item.id}/>
        )}  
        </div>      
    </div>
  )
}
