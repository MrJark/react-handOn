import { useState } from 'react'

import './index.css'

import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'

import { Header } from './components/Header'
import useFilters from './hooks/useFilters'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App () {
  const [products] = useState(initialProducts) // quito el setProducts porque no lo voy a usar por ahora ya que los productos no se van a rehacer
  const { filterProducts } = useFilters();

  /* como useFilters */
  // // const maxPrices = (products) => {
  // //   return products.filter( product => {
  // //     return (
  // //       product.price
  // //     )
  // //   })
  // // }

  // // para filtrar y para saber si está funcionando el filtro, podemos modificarlo a mano y ver si está respondiendo
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0,
  //   // maxPrice: 1749 // quizas hay que quitarla
  // })

  // //! el filtrar es ESENCIAL que se sepa hacer de memoria
  // const filterProducts = (products) => {
  //   return products.filter(product => {
  //     return (
  //       product.price >= filters.minPrice &&
  //       // product.price >= filters.maxPrice && // quizas hay que quitarla y a la de arriba en vez del || es el &&
  //       (
  //         filters.category === 'all' ||
  //         product.category === filters.category
  //       )
  //     )
  //   })
  // };

  const filteredProducts = filterProducts(products);
  // en este contexto utilizamos el CartProvider ya que en la parte de la app, no nos hace falta por tanto, no tenemos que envolverlo en lo mñas alto
  return (
    <CartProvider>
      {/* <Header changeFilters={setFilters}/> // con props drilling necesitas pasar las props tanto aquí como en los componentes pero gracias al context, ya no hace falta esto*/}
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {/* { IS_DEVELOPMENT && <Footer filters={filters}/>}  con propdrilling */}
      { IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
