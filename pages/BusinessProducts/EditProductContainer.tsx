import React from 'react'
import FormEditProduct from '../../components/CRUDProductsBusiness/FormEditProduct'
import GoBack from '../../components/GoBack';
import { Item } from '../../types';

function EditProductContainer() {
    let producto: Item = {
        id: "001",
        nombre: "Plato mexicano",
        precio: 12000,
        descripcion: "plato con deliciosos ingredientes",
        imagen: "/public/Logo.png",
        categoria: "Mexicano",
        stock: 100,
      };
  return (
    <div>
        <GoBack link="/BusinessProducts/CRUDProductBusiness"/>
        <FormEditProduct product={producto}/>
    </div>
  )
}

export default EditProductContainer