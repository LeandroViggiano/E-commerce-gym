/*Aquí va a estar la lógica de negocio y la lista de articulos restantes, luego el backend se encargará de esto */
import { useEffect, useState } from "react"
//import { getProducts } from BACKEND

const ItemListContainer = () => {
    const [products, setProducts] = useState()
    useEffect(() => { //Este useEffect 
        getProducts()
            .then(result => {
                setProducts(result)
            })
    })

    return (
        <ItemList products={products}/>
    )
}

export default ItemListContainer