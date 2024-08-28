import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css';
export function Footer () {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <h4>© 2022. All rights reserved. -- 
        <span>@prueba</span>
      </h4>
      <h5>Shopping cart with useContext and useReducer</h5>
      <h5>Filters: 
        {
          JSON.stringify(filters, null, 2)
        }
        {
          JSON.stringify(cart, null, 2)
        }
       </h5>     
    </footer>
  );
}
