import classes from "../sass/components/Chips.module.scss";
import {useContext} from "react";
import filtersContext from "../context/filters-context";

const Chip = ({children}) => {
    const filterCtx = useContext(filtersContext);
  return(
      <div className={classes.chip}>
          <p className={classes.chip__title}>{children}</p>
          <button onClick={filterCtx.removeFilter.bind(null, `${children}`)} className={classes.chip__clear}>x</button>
      </div>
  )
}
export default Chip;