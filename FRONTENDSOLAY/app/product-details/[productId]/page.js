'use client'
import BreadCrumb from '../../_components/BreadCrumb';
import ProductApis from '../../_utiles/ProductApis';
import React, { useEffect, useState } from 'react';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import ProductList from '../../_components/ProductList';

function ProductDetails({ params }) {
    const [productDetails, setProductDetails] = useState({});
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductById_();
    }, [params?.productId]);

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId).then(res => {
            console.log('product item', res.data.data);
            setProductDetails(res.data.data);
            getProductListByCategory(res.data.data);
        }).catch(err => {
            console.error('Error fetching product:', err);
        });
    };

    const getProductListByCategory = (product) => {
        ProductApis.getProductsByCategory(product?.attributes?.category).then(
            (res) => {
                console.log(res?.data?.data);
                setProductList(res?.data?.data);
            }
        ).catch(err => {
            console.error('Error fetching products by category:', err);
        });
    };

    return (
        <div className="px-10 py-8 md:px-28">
            <BreadCrumb />
            <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
                <ProductBanner product={productDetails} />
                <ProductInfo product={productDetails} />
            </div>
            <div>
                <h2 className='mt-24 text-xl mb-4'>
                    Similar Products
                </h2>
                <ProductList productList={productList} />
            </div>
        </div>
    );
}

export default ProductDetails;
