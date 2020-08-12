import React,{useState} from 'react';
import './AdikaNavbar.scss';
import {FiUser,FiShoppingCart,FiHeart,FiSearch} from 'react-icons/fi';
import { getImage } from '../../assets/images/Images';
import AdikaBadge from '../adikaBadge/AdikaBadge';
import {GiHamburgerMenu} from 'react-icons/gi';
import AdikaDrawer from '../adikaDrawer/AdikaDrawer';

const adikaLogo = getImage('adikaLogo');
const classNameA = 'menu-title padding-horizontal-15';
const menuIconClassname = 'menu-icon margin-horizontal-5';

const AdikaNavbar = () => {  
    const [drawerPressed,setDrawer] = useState(false);

    const toggleDrawer = () => {
        const drawerValue = !drawerPressed;
        setDrawer(drawerValue);
    }
 
    return(
        <div className='navbar-container'>
            <div className='container'>
                <div className='row'>
                    <div className={'mobile-only col-3'}> 
                        <GiHamburgerMenu onClick={toggleDrawer} className={'side-menu-icon'}/>
                        <AdikaDrawer drawerPressed={drawerPressed} drawerPosition={'left'} toggleDrawer={toggleDrawer}/>
                    </div>
                    <div className='web-title col-md-2 col-6'>
                        <img src={adikaLogo} className='logo'/>
                    </div>
                    <div className='col-8 desktop-only'>
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

                    <div className='menu-icons col-md-2 col-3'>
                        <FiSearch className={menuIconClassname}/>
                        <FiUser className={menuIconClassname + ' desktop-only'}/>
                        <FiHeart className={menuIconClassname + ' desktop-only'}/>
                        <FiShoppingCart className={menuIconClassname}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdikaNavbar;