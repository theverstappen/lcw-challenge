import React from 'react'
import FavoritesView from "./FavoritesView";
import { useSelector } from 'react-redux'
import { productSelector} from '../../redux/product'

export function FavoritesContainer() {
  const { products } = useSelector(productSelector)
  const favProducts = products.filter((product) => {
    return product.isFavorite === 1
  })
  return (
    <div> 
      <FavoritesView products={favProducts}/>
    </div>
  );
}
