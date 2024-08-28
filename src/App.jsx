import { products as initialProducts } from "../src/mocks/products"
import { Products } from "./components/Products"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/Cart";

// function useFilters() {
//   // const [filters, setFilters] = useState({
//   //   category: "all",
//   //   minPrice: 0,
//   // });
//   const { filters, setFilters } = useContext(FiltersContext)
//   console.log(filters)


//   const filterProducts = (products) => {
//     return products.filter(product => {
//       return (
//         product.price >= filters.minPrice && 
//         (
//           filters.category === "all" ||
//           product.category === filters.category
//         )
//       )
//     })
//   }
  
//   return { filterProducts, setFilters, filters}
  
// }

function App() {
  // const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Header/>
      {/* <Header>
        <Filters onChangeFilters={setFilters}/>
        prop drilling, pasamos prop a header {children}
      </Header> */}
      <Products products={filteredProducts}/>
      <Cart/>
      <Footer/>
    </CartProvider>
  )
}

export default App
