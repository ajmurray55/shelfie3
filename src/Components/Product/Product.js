import React from 'react'
// import axios from 'axios'


    function Product(props){
        const {name, price, imageUrl} = props.products
        return(
            <div>
                <h1>Product Component</h1>
                {name}
                {price}
                {imageUrl}
            </div>
        )
    }

export default Product