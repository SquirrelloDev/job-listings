import classes from "../../sass/components/Chips.module.scss";
import {useContext} from "react";
import filtersContext from "../../context/filters-context";

const PerkChip = ({children}) => {
  const filterCtx = useContext(filtersContext);
  return (
      <button onClick={filterCtx.addFilter.bind(null, `${children}`)} className={classes['perk-chip']}>{children}</button>
  )
}
export default PerkChip;