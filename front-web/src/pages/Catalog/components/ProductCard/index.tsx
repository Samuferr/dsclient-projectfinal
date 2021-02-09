import React from 'react';
import './styles.scss';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';

const ProductCard = () => (
<div className="card-base border-radius-10 product-card">
    <ProductImage />
    <div className="product-info">
        <div className="product-name">
            <h6>Computador Desktop - Intel Core i7</h6>
        <div className="product-price">
            <span className="product-currency">R$</span>
            <h3 className="product-price">2.779,00</h3>
        </div>
        </div>
    </div>

</div>


 );

export default ProductCard;