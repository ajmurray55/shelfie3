import React from 'react'


    function Product(props){
        const {id, name, price, imageurl} = props.products
        console.log("props imageUrl",imageurl)
        return(
            <div>
                {name}
                {price}
                 <img src={imageurl}/>
                <button onClick={() => props.deleteProduct(id)}>Delete</button>
                <button>Edit</button>
            </div>
        )
    }

export default Product