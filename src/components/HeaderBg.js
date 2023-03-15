import classes from "../sass/components/HeaderBg.module.scss";
import FilterBox from "./FilterBox";
import {useContext} from "react";
import filtersContext from "../context/filters-context";

const HeaderBg = () => {
    const filterCtx = useContext(filtersContext);
  return (
      <section className={classes.header}>
          {filterCtx.filters.length > 0 && <FilterBox/>}
      </section>
  )
}
export default HeaderBg;