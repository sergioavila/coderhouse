import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clearCart: () => {},
})

const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart debe estar dentro del proveedor CartContext')
    }
    return context
}

const CartContexProvider = ({ children }) => {

    const [products, setProducts] = useState()

    const addProduct = (product) => {
        setProducts( products => [...products, product])
    }
    const removeProduct = (product) => {
        setProducts( products => products.filter((item) => item.id !== product.id) )
    }
    const clearCart = () => {
        setProducts([])
    }

    const context = {
        products: products,
        addProduct: addProduct,
        removeProduct: removeProduct,
        clearCart: clearCart,
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContexProvider, useCart } 