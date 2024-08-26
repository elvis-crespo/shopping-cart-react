import { useState, useId } from 'react'
import './Filters.css'
// eslint-disable-next-line react/prop-types
export function Filters  ({ onChangeFilters })  {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChandeMinPrice = (e) => {
        setMinPrice(e.target.value)
        onChangeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChandeCategory = (e) => {
        onChangeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
    <section className="filters">
      <div>
        <label htmlFor={categoryFilterId}>Price</label>
        <input
          //   id="price"
          id={minPriceFilterId}
          type="range"
          min="0"
          max="1000"
          onChange={handleChandeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChandeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smart Phones</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  );
}
