import React from 'react';

const HoverProduct = () => {
    return(
        <div className={'buttons-container'}>
          <span className={'hoverCommon commonButton quick-view'}>
                <b className={'button-text'}>{'Quick view'}</b>
                <i className='iccl iccl-cart'/>
          </span>
          <span className={'hoverCommon commonButton quick-shop'}>
              <b className={'button-text'}>{'Quick Shop'}</b>
              <i className='iccl iccl-cart'/>
          </span>
        </div>
    )
}

export default HoverProduct;