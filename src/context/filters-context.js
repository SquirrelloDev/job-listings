import {createContext} from "react";

const FiltersContext = createContext({
    filters: [],
    addFilter: (filter) => {},
    removeFilter: (filter) => {},
    clearFilters: () => {}
})
export default FiltersContext;