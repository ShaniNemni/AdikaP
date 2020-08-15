import React from 'react';
import {RiShoppingCartLine} from 'react-icons/ri';
import {BsEye} from 'react-icons/bs';
const HoverProduct = () => {
    return(
        <div className={'buttons-container'}>
          <span className={'hoverCommon commonButton quick-view'}>
                <a className={'button-text'}>{'Quick view'}</a>
                <BsEye className={'icon-hover'}/>
          </span>
          <span className={'hoverCommon commonButton quick-shop'}>
              <a className={'button-text'}>{'Quick Shop'}</a>
              <RiShoppingCartLine className={'icon-hover'}/>
          </span>
        </div>
    )
}

export default HoverProduct;