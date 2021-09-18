import React from 'react'
import '../../styles/favorites.scss'
import { useDispatch } from 'react-redux'
import { handleFavorite } from '../../redux/product'


import { ReactComponent as IconFavoriteFilled} from '../../assets/IconFavoriteFilled.svg'

const FavoritesView = ({products}) => {
    const dispatch = useDispatch()	

    return (
    <div className="favorites">
        <div className="favorites__header color-primary font-size-medium font-medium">
            Favorilerim ({products.length} ürün)
        </div>
        {products.length > 0 ? products.map((item) => (
            <div className="favorites__item" key={item.id}>
                <div className="favorites__item__left">
                    <img className="favorites__item__left-img" src={item.img} alt={item.name} />
                </div>
                <div className="favorites__item__right">
                    <div className="favorites__item__right-top">
                        <div className="favorites__item__right-top-name font-size-medium">{item.name}</div>
                        <div className="favorites__item__right-top-price font-size-medium">{item.price} TL  </div>
                    </div>
                    <div className="favorites__item__right-bottom">
                        <div className="favorites__item__right-bottom-left">
                            <div className="color-primary font-size-small"> Beden: <span className="font-bold">M</span></div>
                            <div className="color-primary font-size-small"> Renk: <span className="font-bold">{item.color[0].name} </span></div>
                        </div>
                        <div className="favorites__item__right-bottom-right">
                            <IconFavoriteFilled onClick={() => {dispatch(handleFavorite(item.id))}} />
                        </div>
                    </div>
                </div>
            </div>
        )) : <div>Favorilere eklenmiş ürün bulunmuyor</div>}
    </div>
    )
}
export default FavoritesView
