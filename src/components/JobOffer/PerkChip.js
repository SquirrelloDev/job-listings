import classes from "../../sass/components/Chips.module.scss";

const PerkChip = ({children}) => {
  return (
      <button className={classes['perk-chip']}>{children}</button>
  )
}
export default PerkChip;