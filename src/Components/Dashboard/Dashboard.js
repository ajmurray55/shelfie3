import React from 'react'
// import axios from 'axios'
import Product from '../Product/Product'


    function Dashboard(props){
        const mappedData = props.inventory.map(products => {
            return <Product products={products}/>
        })
        return(
            <div>
                <h1>Dashboard Component</h1>
                {mappedData}
            </div>
        )
    }

export default Dashboard