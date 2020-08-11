import React from 'react';
import './AdikaNavbar.scss';

import {FiUser,FiShoppingCart,FiHeart,FiSearch} from 'react-icons/fi';
import { getImage } from '../../assets/images/Images';
import AdikaBadge from './AdikaBadge';

const adikaLogo = getImage('adikaLogo');
const classNameA = 'padding-horizontal-15';
const AdikaNavbar = () => { 
    return(
        <div className='navbar-container'>
            <div className='container'>
                <div className='row'>
                    <div className='web-title col-2'>
                        <img src={adikaLogo} className='logo'/>
                    </div>
                    <div className='col-8'>
                        <ul className='menu-list'>
                            <li className='menu-item'>
                                <a className={classNameA}>Demo</a>
                            </li>
                            <li className='menu-item'>
                                <a className={classNameA}>Shop</a>
                                <AdikaBadge title={"New"} color={'#01bad4'}/>
                            </li>
                            <li className='menu-item'>
                                <a className={classNameA}>Product</a>
                            </li>
                            <li className='menu-item'>
                                <a className={classNameA +" color-red"}>Sale</a>
                                 <AdikaBadge title={"Sale"} color={'#ffa800'}/>
                            </li>
                            <li className='menu-item'>
                                 <a className={classNameA}>Portfolio</a>
                            </li>
                            <li className='menu-item '>
                                 <a className={classNameA}>Lookbook</a>
                            </li>
                            <li className='menu-item'>
                                 <a className={classNameA}>Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className='menu-icons col-2'>
                        <FiSearch className='menu-icon margin-horizontal-5'/>
                        <FiUser className='menu-icon margin-horizontal-5'/>
                        <FiHeart className='menu-icon margin-horizontal-5'/>
                        <FiShoppingCart className='menu-icon margin-horizontal-5'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdikaNavbar;