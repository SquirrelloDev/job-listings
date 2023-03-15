import JobOffer from "./JobOffer/JobOffer";
import classes from "../sass/components/JobOffers.module.scss";
import useFileData from "../hooks/use-file-data";

const JobOffers = () => {
    const {fileData} = useFileData('./data.json');
  return(
      <div className={classes.jobs}>
          <JobOffer/>
          <JobOffer/>
      </div>

  )
}
export default JobOffers;