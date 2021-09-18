import React, {useState} from 'react'
import '../../styles/basket.scss'
import  { ReactComponent as IconDelete } from '../../assets/IconDelete.svg'
import  { ReactComponent as IconFavorite } from '../../assets/IconFavorite.svg'
import  { ReactComponent as IconFavoriteFilled } from '../../assets/IconFavoriteFilled.svg'
import  IconLeft from '../../assets/IconLeft.svg'


import { useDispatch } from 'react-redux'
import { handleFavorite, addOrRemoveBasket, removeProductFromBasket } from '../../redux/product'
import Snackbar from '@mui/material/Snackbar';
import   Modal from '../../components/Modal'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const BasketView = ({products}) => {
    const dispatch = useDispatch()	

    const [warningMessage, setWarningMessage] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [fav, setFav] = useState(0);
    const [productId, setProductId] = useState(0);


    const openModal = (id, isFav) => {
        setProductId(id);
        setFav(isFav);
        setDeleteModal(true)
    };

    const closeModal = ({id, removeFromBasket, addToFavorites}) => {
        setDeleteModal(false)
        if(removeFromBasket){
            if(addToFavorites !== 'backdropClick') 
                dispatch(removeProductFromBasket({id, addToFavorites}))
        }
    };

    const handleClickWarning = () => {
        setWarningMessage(true)
    };

    const handleWarningClose = () => {
        setWarningMessage(false)
    };

    return (
        <div className="basket">
            {
                products.length ? 
                <>
                <div className="basket__checkout">
                    <div className="basket__checkout__header">
                        <div className="font-size-medium color-primary font-medium">
                            Sepetim ({products.length} ürün)
                        </div>
                        <div className="basket__checkout__header-action font-size-medium color-secondary font-medium" onClick={() => { window.history.back() }}>
                            <img  src={IconLeft} alt='icon-left' />
                            Alışverişe devam et
                        </div>
                    </div>

                    {products.map((item) => (
                        <div key={item.id} className="basket__checkout__products">
                            <div className="basket__checkout__products__left">
                                <img  src={item.img} alt={item.name} />
                            </div>
                            <div className="basket__checkout__products__right">
                                <div className="basket__checkout__products__right__top">
                                    <div>
                                        <div className="color-primary font-size-medium margin-bottom">{item.name}</div>
                                        <div className="color-additional font-size-small">W1CE95Z8 - 998</div>
                                    </div>

                                    <div className="color-secondary font-size-large font-bold">{item.price} TL</div>
                                </div>
                                <div className="basket__checkout__products__right__middle">
                                    <IconDelete className="app-icon" style={{ marginRight: '10px'}}
                                        onClick={() => {openModal(item.id, item.isFavorite)}}
                                    />
                                    {
                                        item.isFavorite === 1  ? 
                                        <IconFavoriteFilled className="app-icon" onClick={() => {dispatch(handleFavorite(item.id))}}/> 
                                            : 
                                        <IconFavorite className="app-icon" onClick={() => {dispatch(handleFavorite(item.id))}} />
                                    }
                                </div>
                                <div className="basket__checkout__products__right__bottom">
                                    <div>
                                        <div className="color-primary margin-bottom font-size-small"> Beden: <span className="font-bold">M</span></div>
                                        <div className="color-primary font-size-small"> Renk: <span className="font-bold">{item.color[0].name} </span></div>
                                    </div>
                                    <div className="basket__checkout__products__right__bottom-options">
                                        <div className="color-primary font-size-large" 
                                            onClick={() => {
                                                if(item.count === 1){
                                                    handleClickWarning()
                                                }
                                                else {
                                                    dispatch(addOrRemoveBasket({
                                                        id: item.id,
                                                        val: -1
                                                    }))
                                                }
                                                }}>-
                                        </div>
                                        <div className="color-secondary font-medium font-size-large">{item.count}</div>
                                        <div className="color-primary font-size-large"
                                            onClick={() => {dispatch(addOrRemoveBasket({
                                                id: item.id,
                                                val: 1
                                            }))}} >+
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    ))}
                </div>
                <div className="basket__review">
                    <div className="color-primary font-size-large font-medium">Sipariş Özeti</div>
                    <div className="basket__review-row margin-bottom">
                        <div className="color-primary">Ürün Toplam</div>
                        <div className="color-primary">450 TL</div>
                    </div>
                    <div className="basket__review-row margin-bottom">
                        <div className="color-primary font-bold">İndirimler</div>
                        <div className="color-primary font-bold">30 TL</div>
                    </div>
                    <div className="basket__review-row margin-bottom">
                        <div className="color-primary">Ara Toplam</div>
                        <div className="color-primary">330 TL</div>
                    </div>
                    <div className="basket__review-row margin-bottom">
                        <div className="color-primary font-bold">Kargo Ücreti</div>
                        <div className="color-primary font-bold">Bedava</div>
                    </div>
                    <div className="basket__review-total">
                        <div className="color-secondary font-bold">Genel Toplam</div>
                        <div className="color-secondary font-bold">550 TL</div>
                    </div>

                </div>
                </>
                    :
                <div style={{marginTop: '40px'}}>Sepete eklenmiş ürün bulunmuyor.</div>   
            }
            <Snackbar
                open={warningMessage}
                autoHideDuration={1600}
                onClose={handleWarningClose}
                message="Adet sıfır olarak seçilemez!"
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                key={'top' + 'center'}
            />
            <Modal 
                isOpen={deleteModal} 
                isFavorite={fav} 
                id={productId}
                onCloseModal={closeModal} 
            />
        </div>
        )
}

export default BasketView
