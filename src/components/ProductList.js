import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productSelector, handleFavorite, addOrRemoveBasket, sortProducts } from '../redux/product'
import { ReactComponent as IconFavorite} from '../assets/IconFavorite.svg'
import IconSort from '../assets/IconSort.svg'
import { ReactComponent as IconFavoriteFilled} from '../assets/IconFavoriteFilled.svg'
import Snackbar from '@mui/material/Snackbar';
import '../styles/product_list.scss'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@mui/material'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ProductList = () => {
    const dispatch = useDispatch()	
    const [addedToBasket, setAddedToBasket] = useState(false);

    const breadcrumbs = [
        <Typography key="1" className="color-primary" >Ana sayfa</Typography>,
        <Typography key="2" className="color-primary">Erkek</Typography>,
        <Typography key="3" className="color-primary">Sweatshirt</Typography>,
      ];

    const [sort, setSort] = useState("");
    const handleSort = (event) => {
        setSort(event.target.value);
        dispatch(sortProducts(event.target.value));
      };

    const handleBasket = (id, val) => {
        setAddedToBasket(true)
        dispatch(addOrRemoveBasket({id: id, val: val}))
    };

    const handleClose = () => {
        setAddedToBasket(false)
    };

    const { products, loading, hasErrors } = useSelector(productSelector)

    const renderProducts = () => {
        if (loading) return <p>Ürünler yükleniyor.</p>
        if (hasErrors) return <p>Ürünler gorüntülenemiyor...</p>
        return (
            <>
            <div className="breadcrumb">
                <Breadcrumbs fontSize="large" separator={<NavigateNextIcon fontSize="medium" />}aria-label="breadcrumb">{breadcrumbs} </Breadcrumbs>
            </div>
            <div className="product-category-info color-primary">Erkek Sweatshirt Modelleri</div>
            <div className="product-list-top">
                <div className="color-primary font-medium">
                    {products?.length } ürün
                </div>
                <div className="product__select">
                <img className="color-primary" src={IconSort} alt='sort'/>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={sort}
                        onChange={handleSort}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                    >
                        <MenuItem value=""><em>Sırala</em></MenuItem>
                        <MenuItem value='desc'>En Yüksek Fiyat</MenuItem>
                        <MenuItem value='asc'>En Düşük Fiyat</MenuItem>
                    </Select>
                </FormControl>
            </div>
            </div>
            <div className="products">

                {products.map((item) => (
                <div className="products__item" key={item.id}>
                    {item.isFavorite === 1 ? 
                        <IconFavoriteFilled onClick={() => {dispatch(handleFavorite(item.id))}} className="products__item-favicon" /> 
                            :
                        <IconFavorite onClick={() => {dispatch(handleFavorite(item.id))}} className="products__item-favicon" /> 
                    }
                    <div className="products__item__top">
                        <div className="products__item__top-addbasket" 
                             onClick={() => handleBasket(item.id, 1) }>
                            SEPETE EKLE
                        </div>
                        <img className="products__item__top-img" src={item.img} alt={item.name} />
                    </div>
                    <div className="products__item__bottom">
                        <div className="products__item__bottom-name color-primary font-size-medium">
                         {item.name}
                        </div>
                        <div className="products__item__bottom-price color-secondary font-size-large">
                         {item.price} TL
                        </div>
                        <div className="products__item__bottom-color color-primary">
                            {
                                item.color.map((color) => (
                                    <div className="dot" key={color.val} style={{backgroundColor: color.val}}></div>
                                ))
                            }
                            <div className="products__item__bottom-color-count color-primary font-size-medium">{item.color && item.color.length} Renk</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </>                    
        );
    }

    return (
        <>
            {renderProducts()}
            <Snackbar
                open={addedToBasket}
                autoHideDuration={1600}
                onClose={handleClose}
                message="Ürün sepete eklendi !"
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                key={'top' + 'center'}
            />
        </>
    )
}

export default ProductList;
