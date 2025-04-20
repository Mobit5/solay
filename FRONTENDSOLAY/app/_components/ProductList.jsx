import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }) { // Destructure productList from props
  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5'>
      {productList.map(item => (
        <div key={item.id}><ProductItem product={item} /> </div> // Add a unique key for each item
      ))}
    </div>
  );
}

export default ProductList;
