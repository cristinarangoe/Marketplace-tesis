import { useContext } from 'react';

import { CartContext } from './ContextProductsCart';
import { UserContext } from './ContextUser';

export const useCartContext = () => useContext(CartContext);
export const useUserContext = () => useContext(UserContext);
