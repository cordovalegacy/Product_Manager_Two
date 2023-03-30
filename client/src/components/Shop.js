import axios from 'axios'
import { useState, useEffect } from 'react'

const Shop = (props) => {

    const {productList, setProductList} = props

    console.log(Array.isArray(productList))



    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])


    return(
        <div>
            {productList.map((product, idx) => (
                <ul className='bg-primary rounded p-4' key={idx}>
                    <li className='text-warning'>{product.title}</li>
                    <li className='text-warning'>{product.price}</li>
                    <li className='text-warning'>{product.description}</li>
                </ul>
            ))}
        </div>
    )

}

export default Shop