import React from 'react'
import { useLocation } from 'react-router-dom'
import   Logo from '../assets/Logo.svg';
import  { ReactComponent as IconBasket } from '../assets/IconBasket.svg';
import  { ReactComponent as IconFavorite } from '../assets/IconFavorite.svg';
import { setPage } from '../redux/page';
import {  useDispatch } from 'react-redux'

import { LinkRoute } from "../components/LinkRoute";
import {BASKET, ROOT} from "../navigation/Constants";
import '../styles/header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const routes = ['KADIN', 'ERKEK', 'ÇOCUK', 'BEBEK']
    return (
        <div className="header">
            <div className="header__top">
                <LinkRoute className="header__top__menu__item" to={ROOT} onClick={() => dispatch(setPage(false))}>
                    <img src={Logo} alt="logo" className="header__logo" />
                </LinkRoute>
                <div className="header__top__menu" >
                    <LinkRoute className="header__top__menu__item" to={location.pathname}
                        onClick={() => dispatch(setPage())}>
                        <IconFavorite />
                        <div className="header__top__menu__item-text color-primary">Favorilerim</div>
                    </LinkRoute>
                    <LinkRoute className="header__top__menu__item" to={BASKET} onClick={() => dispatch(setPage(false))}>
                        <IconBasket />
                        <div className="header__top__menu__item-text color-primary">Sepetim</div>
                    </LinkRoute>
                </div>
            </div>
            <div className="header__bottom">
                {
                    routes.map((route) => (
                        <div className="header__bottom-items color-primary" key={route}>
                            {route}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header;
