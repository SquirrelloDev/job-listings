import classes from "../sass/components/Chips.module.scss";

const Chip = ({children}) => {
  return(
      <div className={classes.chip}>
          <p className={classes.chip__title}>{children}</p>
          <button className={classes.chip__clear}>x</button>
      </div>
  )
}
export default Chip;