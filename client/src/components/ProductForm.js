import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ProductForm = (props) => {

    const { productList, setProductList } = props

    const navigate = useNavigate()

    const [products, setProducts] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/products', products)
            .then((res) => {
                console.log(res.data)
                setProductList([...productList, res.data])
                setProducts({
                    title: "",
                    price: 0,
                    description: ""
                })
                navigate('/display')
            })
            .catch((err) => {
                console.log('Something went wrong: ', err)
            })
    }

    return (
        <form onSubmit={submitHandler} className="bg-primary p-4 m-auto d-flex flex-column align-items-center w-75 rounded">
            <h4 className="text-warning">Add a product to the shop!</h4>
            <div className="form-group p-2 text-center">
                <label className="w-50" htmlFor="title">Title: </label>
                <input className="w-100" type="text" name="title" onChange={changeHandler} />
            </div>
            <div className="form-group p-2 text-center">
                <label className="w-50" htmlFor="price">Price: </label>
                <input className="w-100" type="number" name="price" onChange={changeHandler} />
            </div>
            <div className="form-group p-2 text-center">
                <label className="w-50" htmlFor="description">Description: </label>
                <textarea className="w-100" type="text" name="description" onChange={changeHandler} />
            </div>
            <input type="submit" value="Add to Shop" />
        </form>
    )

}

export default ProductForm