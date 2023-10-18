import { createContext, useState } from "react";



export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const agregarAlCarrito = (item, quantity) => {
        const itemAgregado = { ...item, quantity };
        const nuevoCarrito = [...cart]
        const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);
        if (estaEnElCarrito) {
            estaEnElCarrito.quantity += quantity;
        } else {
            nuevoCarrito.push(itemAgregado)
            setCart(nuevoCarrito)
        }
    }
    const cantidadEnCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }
    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }
    const vaciarCart = () => {
        setCart([])
    }

    
    

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCart, }}>
            {children}
        </CartContext.Provider>
    )
}