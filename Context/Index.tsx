import { useContext } from 'react';

import { GlobalContext } from './ContextProductsCart'

export const useGlobalContext = () => useContext(GlobalContext);