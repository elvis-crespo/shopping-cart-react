import { Filters } from "./Filters"

// eslint-disable-next-line react/prop-types
export function Header ({ changeFilters })  {
  return (
    <header>
        <h1>React Shop 🛒</h1>
        <Filters onChangeFilters={changeFilters}/>
    </header>
  )
}
