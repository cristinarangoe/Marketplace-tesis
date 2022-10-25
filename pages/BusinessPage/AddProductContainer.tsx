import React from 'react'
import FormAddProduct from '../../components/CRUDProductsBusiness/FormAddProduct'
import GoBack from '../../components/Navbar-Navigation/GoBack'

function AddProductContainer() {
  return (
    <div>
        <GoBack link='/BusinessPage/CRUDProductBusiness' children=''/>
        <FormAddProduct/>
    </div>
  )
}

export default AddProductContainer