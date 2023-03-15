import FiltersContext from "./filters-context";
import {useState} from "react";
const FilterProvider = ({children}) => {
    const [filters, setFilters] = useState([]);
    const filtersContext = {
        filters
    }
  return (
      <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>
  )
}