import React from "react";
import BasketView from "./BasketView";
import Header from '../../components/Header'

import { useSelector } from 'react-redux'
import { productSelector} from '../../redux/product'

export function BasketContainer() {

  const { products } = useSelector(productSelector)
  const basketProducts = products.filter((product) => {
    return product.isBasket === 1
  })
  return (
    <div>
      <Header />
      <BasketView products={basketProducts} />
    </div>
  );
}
