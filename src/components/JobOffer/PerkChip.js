import classes from "../../sass/components/Chips.module.scss";
import {useContext} from "react";
import filtersContext from "../../context/filters-context";

const PerkChip = ({children}) => {
  const filterCtx = useContext(filtersContext);
  let chipClasses = classes['perk-chip'];
  filterCtx.filters.forEach(filter =>{
    if(filter === children){
      chipClasses = `${classes['perk-chip']} ${classes['perk-chip__active']}`
    }
  })
  return (
      <button onClick={filterCtx.addFilter.bind(null, `${children}`)} className={chipClasses}>{children}</button>
  )
}
export default PerkChip;