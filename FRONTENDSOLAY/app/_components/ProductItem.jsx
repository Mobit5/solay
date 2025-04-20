import React from 'react';
import Image from 'next/image';
import { LayoutList } from 'lucide-react';
import Link from 'next/link';
function ProductItem({ product }) {
  const imageUrl = product?.attributes?.foto?.data?.attributes?.url 
  ? `https://solay-backend-420j.onrender.com${product.attributes.foto.data.attributes.url}` 
  : '';


  return (
    <Link href={`/product-details/${product.id}`} className='p-1 border-teal-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer'>
      {imageUrl ? (
        <Image 
          src={imageUrl}
          alt="Product Image"
          width={300}
          height={300}
          className='rounded-t-lg h-[300px] object-cover'
        />
      ) : (
        <p>No Image Available</p>
      )}
      <div className='flex items-center justify-between p-3 rounded-b-lg bg-gray-50'>
      <div >
        <h2 className='text-[12px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
        <h2 className='text-[10px] text-gray-400 flex  gap-1 items-center'>
				<LayoutList className='w-4 h-4' />  {product?.attributes?.category}</h2>
      </div>
      <h2>{product?.attributes?.price}TL</h2>
      </div>


    </Link>
  );
}

export default ProductItem;
