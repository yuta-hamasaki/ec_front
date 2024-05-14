import React from 'react'
import ProductCard from '../components/productCard';

const Top = () => {

const productData = [
  {
  id:1, productName:'Shampoo', shopName: "Yuta .inc", price:"$100.00",
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Kazu', shopName: "cornerstone .inc", price:"$1000.00"
},
];

  return (
    <>
    {/*トップページをここに記述 */}
    <div>
      <div className="">
        {/*トップセクション */}
      </div>
      <div className="flex flex-wrap m-6">
        {productData.map((product, index)=>(
          <ProductCard
            key={index}
            productName={product.productName}
            shopName={product.shopName}
            price={product.price}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Top
