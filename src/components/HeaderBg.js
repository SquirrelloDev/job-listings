import classes from "../sass/components/HeaderBg.module.scss";
import FilterBox from "./FilterBox";

const HeaderBg = () => {
  return (
      <section className={classes.header}>
        <FilterBox/>
      </section>
  )
}
export default HeaderBg;