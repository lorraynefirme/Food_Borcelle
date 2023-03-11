import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import salada1 from '../../assets/categorias/saladas/salada1.png';
import salada2 from '../../assets/categorias/saladas/salada2.png';
import salada3 from '../../assets/categorias/saladas/salada3.png';
import salada4 from '../../assets/categorias/saladas/salada4.png';
import salada5 from '../../assets/categorias/saladas/salada5.png';
import iogurte1 from '../../assets/categorias/iogurtes/iogurte1.png';
import iogurte2 from '../../assets/categorias/iogurtes/iogurte2.png';
import iogurte3 from '../../assets/categorias/iogurtes/iogurte3.png';
import iogurte4 from '../../assets/categorias/iogurtes/iogurte4.png';
import suco1 from '../../assets/categorias/sucos/suco1.png';
import suco2 from '../../assets/categorias/sucos/suco2.png';
import suco3 from '../../assets/categorias/sucos/suco3.png';
import toast1 from '../../assets/categorias/toasts/toast1.png';
import toast2 from '../../assets/categorias/toasts/toast2.png';
import toast3 from '../../assets/categorias/toasts/toast3.png';
import toast4 from '../../assets/categorias/toasts/toast4.png';


const initialState = [{
    titulo: 'Salada com Frutas',
    foto: salada1,
    preco: 23,
    id: uuid(),
    categoria: 'saladas'
  },
  {
    titulo: 'Salada sem Grãos',
    foto: salada2,
    preco: 18,
    id: uuid(),
    categoria: 'saladas'
  },
  {
    titulo: 'Salada Tropical',
    foto: salada3,
    preco: 21,
    id: uuid(),
    categoria: 'saladas'
  },
  {
    titulo: 'Salada Verde',
    foto: salada4,
    preco: 22,
    id: uuid(),
    categoria: 'saladas'
  },
  {
    titulo: 'Salada Primavera',
    foto: salada5,
    preco: 23,
    id: uuid(),
    categoria: 'saladas'
  },
  {
    titulo: 'Iogurte com Blueberry',
    foto: iogurte1,
    preco: 10,
    id: uuid(),
    categoria: 'iogurtes'
  },
  {
    titulo: 'Iogurte Grego',
    foto: iogurte2,
    preco: 10,
    id: uuid(),
    categoria: 'iogurtes'
  },
 {
    titulo: 'Iogurte com Morangos',
    foto: iogurte3,
    preco: 12,
    id: uuid(),
    categoria: 'iogurtes'
  },
  {
    titulo: 'Iogurte com Frutas Vermelhas',
    foto: iogurte4,
    preco: 8,
    id: uuid(),
    categoria: 'iogurtes'
  },
  {
    titulo: 'Suco de Limão',
    foto: suco1,
    preco: 8,
    id: uuid(),
    categoria: 'sucos'
  },
  {
    titulo: 'Suco de Morango',
    foto: suco2,
    preco: 8,
    id: uuid(),
    categoria: 'sucos'
  },
  {
    titulo: 'Suco de Laranja',
    foto: suco3,
    preco: 8,
    id: uuid(),
    categoria: 'sucos'
  },
  {
    titulo: 'Torrada com Tomate',
    foto: toast1,
    preco: 12,
    id: uuid(),
    categoria: 'torradas'
  },
  {
    titulo: 'Torrada com Abacate',
    foto: toast2,
    preco: 13,
    id: uuid(),
    categoria: 'torradas'
  },
  {
    titulo: 'Torrada com Pão Caseiro',
    foto: toast3,
    preco: 11,
    id: uuid(),
    categoria: 'torradas'
  },
  {
    titulo: 'Torrada com Salmão',
    foto: toast4,
    preco: 12,
    id: uuid(),
    categoria: 'torradas'
  },
];
  

const itensSlice = createSlice({ //itensSlice é um slice do reducer
    name: 'itens',
    initialState,
   
  });
  
  
  export default itensSlice.reducer;