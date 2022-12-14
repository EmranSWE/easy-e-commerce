import { useEffect } from "react";
import { useState } from "react"

const useProducts =() =>{
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://peaceful-springs-08205.herokuapp.com/product')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts];
}

export default useProducts;