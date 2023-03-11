import { createSlice } from '@reduxjs/toolkit';
import saladaThumb from '../../assets/categorias/salada.png'
import toastThumb from '../../assets/categorias/toast.png'
import iogurteThumb from '../../assets/categorias/iogurte.png'
import sucoThumb from '../../assets/categorias/suco.png'

const initialState = [{
    nome: 'salada',
    thumbnail: saladaThumb,
    titulo: 'Saladas',
    id: 'saladas',
  },
  {
    nome: 'iogurte',
    thumbnail: iogurteThumb,
    titulo: 'Iogurtes',
    id: 'iogurtes',
  }, 
  {
    nome: 'suco',
    thumbnail: sucoThumb,
    titulo: 'Sucos',
    id: 'sucos',
  },  
  {
    nome: 'torrada',
    thumbnail: toastThumb,
    titulo: 'Torradas',
    id: 'torradas',
  }, 
]

  const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
  });

  export default categoriasSlice.reducer;