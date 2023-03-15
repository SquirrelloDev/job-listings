import classes from "../sass/components/FilterBox.module.scss";
import Chip from "./Chip";
import {useContext} from "react";
import filtersContext from "../context/filters-context";

const FilterBox = () => {
    const filterCtx = useContext(filtersContext);
  return (
      <div className={classes.filter__container}>
          <div className={classes.filter__container__chips}>
              {filterCtx.filters.map(filter => <Chip>{filter}</Chip>)}
          </div>
                <button onClick={filterCtx.clearFilters} className={classes.filter__container__clear}>Clear</button>
      </div>
  )
}
export default FilterBox;