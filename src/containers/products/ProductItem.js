import React,{useState} from 'react';

const ProductItem = ({product}) => {
    const [isShown, setIsShown] = useState(false);
    const [imageToDisplay,setImage] = useState(product.images[0]);

    const mouseHover= () => {
        setIsShown(true);
        setImage(product.images[1]);
    }

    const mouseLeave = () => {
        setIsShown(false);
        setImage(product.images[0])
    }

    
    const firstImageToDisplay = product.images[0];
    const secondImageToDisplay = product.images[1];

    return(
            <div className={'product-container col-lg-15 col-md-3 col-6'}>
                <div onMouseOver={mouseHover} onMouseLeave={mouseLeave} class={'image-background'} style={{backgroundImage:`url(${imageToDisplay})`,paddingTop:'130%',backgroundSize:'contain',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}}/>
                <div className={'product-title-price'}> 
                    <h1 className={'product-title'}>{product.name}</h1>
                    <span className={'product-price'}>{product.price + product.currency}</span>
                </div>
            </div>
    )
}

export default ProductItem;