import React from 'react'
import FormAddProduct from '../../components/CRUDProductsBusiness/FormAddProduct'
import GoBack from '../../components/GoBack'

function AddProductContainer() {
  return (
    <div>
        <GoBack link='/BusinessProducts/CRUDProductBusiness'/>
        <FormAddProduct/>
    </div>
  )
}

export default AddProductContainer