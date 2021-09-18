import React from 'react'
import  IconFB  from '../assets/IconFB.svg';
import  IconLinkedin  from '../assets/IconLinkedin.svg';
import  IconYoutube  from '../assets/IconYoutube.svg';
import  IconInstagram  from '../assets/IconInstagram.svg';

import  IconIos  from '../assets/IconIos.png';
import  IconAndroid  from '../assets/IconAndroid.png';
import  IconGal from '../assets/IconGal.png';


import '../styles/footer.scss'
 const Footer = () => {
     const menu = [
         {
             title: 'Yardım',
             submenu: ['Sıkça Sorulan Sorular', 'İade ve değişim', 'Site haritası', 'Kullanım Koşulları', 'İşlem rehberi']
         },
         {
            title: 'Kurumlar',
            submenu: ['Hakkımızda', 'Mağazalarımız', 'Kurumsal/Corporate', 'Kariyer fırsatları', 'Kurumsal destek', 'Hediye kart']
        },
        {
            title: 'Politikalar',
            submenu: ['Aydınlatma metni', 'Veri gizliliği ve güvenliği politikası']
        }
     ]
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top__left font-medium color-primary">
                <div className="footer__top__left-info font-medium color-primary">Uygulamayı İndirin</div>
                    <img src={IconIos} alt="fb" />
                    <img src={IconAndroid} alt="fb" />
                    <img src={IconGal} alt="fb" />

                </div>
                <div className="footer__top__right">
                    <div className="footer__top__right-info font-medium color-primary">Bizi takip edin</div>
                    <img src={IconFB} alt="fb" />
                    <img src={IconLinkedin} alt="linkedin" />
                    <img src={IconYoutube} alt="youtube" />
                    <img src={IconInstagram} alt="instagram" />

                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__left">

                {menu.map((item) => (
                    <div className="footer__bottom__left-menu" key={item.title}>
                        <div className="footer__bottom__left-menu-title color-primary font-medium font-size-medium">{item.title}</div>
                            {item.submenu.map((sub) => (
                                <div className="footer__bottom__left-menu" key={sub}>
                                    <div className="footer__bottom__left-menu-item color-primary  font-size-medium">{sub}</div>
                                </div>
                            ))}
                    </div>
                ))}

                </div>
                <div className="footer__bottom__right">
                    <div className="footer__bottom__right-text color-primary font-medium font-size-medium">LCW Destek</div>
                        <a href='!#' className="footer__bottom__right-btn color-secondary font-medium">İletişim formu</a>
                        <a href='!#' className="footer__bottom__right-btn color-secondary font-medium">444 4 529</a>
                        <a href='!#' className="footer__bottom__right-btn color-secondary font-medium">Whatsapp destek 444 4  529</a>
                </div>

            </div>

        </div>
    )
}

export default Footer;
