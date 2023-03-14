import classes from "../sass/components/FilterBox.module.scss";
import Chip from "./Chip";

const FilterBox = () => {
  return (
      <div className={classes.filter__container}>
          <div className={classes.filter__container__chips}>
              {/*  TODO: Here will be the chip components*/}
              <Chip>Frontend</Chip>
              <Chip>CSS</Chip>
          </div>
            <div className={classes.filter__container__clear}>
                <p>Clear</p>
            </div>
      </div>
  )
}
export default FilterBox;