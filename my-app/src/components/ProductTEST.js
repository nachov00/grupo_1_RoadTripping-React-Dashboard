import React, { useEffect, useState } from "react";
import '../Styles.css'




const Product2 = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3030/api/products")            
        .then(res => res.json())
        .then(data => {           
            const productData = {
                total: data.meta.count
            }
            setProduct(productData);
        });
},[]);

    return (
      <div>
        <div>
          {product ? (
            <p className="users">
              {"Cantidad total de productos: " + product.total}
            </p>
          ) : null}
        </div>
      </div>
    );
}


export default Product2;