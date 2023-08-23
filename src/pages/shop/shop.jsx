import React from 'react'
import { ProductList } from '../../utils/productList'
import { Product } from '../../components/product'
import '../../styles/shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>BIG BILLION DAY SALE</h1>
        </div>
        <div className='products'>
            {ProductList.map((item) =>
                (
                    <Product data={item}/>
                )
            )}
        </div>
        
    </div>
  )
}
