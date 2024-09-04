import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import Card1 from "../components/card"


const Eachproduct=()=>{
    const url=useParams()

    const [product,setproduct]=useState({})
    useEffect(()=>{
        fetchdata()
    },[url])
    const fetchdata=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${url.productid}`)
    
        if(response.status===200){
            setproduct(response.data)
            

        }
    }
    return(
        <>
        <Card1  title={product.title} text={product.description} img={product.image} />
        </>

    )
}
export default Eachproduct