import React from 'react'
import Image from 'next/image'

function ProductBanner({ product }) {
  // التحقق من البيانات
  console.log('Product in ProductBanner:', product);

  const imageUrl = product?.attributes?.foto?.data?.attributes?.url 
    ? `https://solay-backend-420j.onrender.com${product.attributes.foto.data.attributes.url}` 
    : '';

  // التحقق من مسار الصورة
  console.log('Image URL in ProductBanner:', imageUrl);

  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt='product-details-banner'
          width={400}
          height={400}
          className='rounded-lg'
        />
      ) : (
        <div>No Image Available</div>
      )}
    </div>
  );
}

export default ProductBanner;
