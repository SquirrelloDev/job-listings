import FiltersContext from "./filters-context";
import {useState} from "react";
const FilterProvider = ({children}) => {
    const [filters, setFilters] = useState([]);
    const addFilter = (filter) => {
      const newFilterArr = filters.concat(filter);
      setFilters(newFilterArr);
    }
    const removeFilter = (filter) => {
        const newFilterArr = filters.filter(item => item !== filter);
        setFilters(newFilterArr);
    }
    const clearFilters = () => {
      setFilters([]);
    }
    const filtersContext = {
        filters,
        addFilter,
        removeFilter,
        clearFilters
    }
  return (
      <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>
  )
}
export default FilterProvider;