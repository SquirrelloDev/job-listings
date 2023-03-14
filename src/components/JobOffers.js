import JobOffer from "./JobOffer/JobOffer";
import classes from "../sass/components/JobOffers.module.scss";

const JobOffers = () => {
  return(
      <div className={classes.jobs}>
          <JobOffer/>
          <JobOffer/>
      </div>

  )
}
export default JobOffers;