import React from 'react';
import './styles.scss';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';

const ProductCard = () => (
<div className="card-base border-radius-10 product-card">
    <ProductImage />
    <div className="product-info">
        <div className="product-name">
            <h6>Computador Desktop - Intel Core i7</h6>
            <ProductPrice price="2.779,00" />
        </div>
    </div>

</div>


 );

export default ProductCard;