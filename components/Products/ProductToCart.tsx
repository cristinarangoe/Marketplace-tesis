import React, { useContext, useState } from 'react'
import AddProductCartButton from '../Cart/AddProductCartButton'
import ProductCount from './ProductCount'

import { useGlobalContext } from '../../Context/Index'
import { Item } from '../../types';



function ProductToCart({producto, initial} : {producto: Item, initial: number}) {

    const [cantParcial, setCantParcial] = useState(initial);

    const {addItemProp} = useGlobalContext();

    function adding(){
        console.log("hola")
        if(cantParcial < producto.stock){
            setCantParcial(cantParcial + 1);
        }
    }
    function subs(){
        if(cantParcial > 1){
            setCantParcial(cantParcial - 1);
        }
    }

  return (
    <div>
        <ProductCount product={producto} onPressAdd={adding} onPressSubs={subs} cantidad={cantParcial}/>
        <AddProductCartButton onPress={() => addItemProp(producto,cantParcial)}/>
    </div>
  )
}

export default ProductToCart