import { useState } from "react"
import { products as initialProducts } from "../src/mocks/products"
import { Products } from "./components/Products"
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === "all" ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      {/* <Header>
        <Filters onChangeFilters={setFilters}/>
        prop drilling, pasamos prop a header {children}
      </Header> */}
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
