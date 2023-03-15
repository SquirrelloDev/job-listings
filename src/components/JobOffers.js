import JobOffer from "./JobOffer/JobOffer";
import classes from "../sass/components/JobOffers.module.scss";
import useFileData from "../hooks/use-file-data";
import {useContext, useEffect, useState} from "react";
import filtersContext from "../context/filters-context";

const JobOffers = () => {
    const {fileData} = useFileData('./data.json');
    const filterCtx = useContext(filtersContext);
    const [jobs, setJobs] = useState(fileData);
    useEffect(() => {
        if(filterCtx.filters.length <= 0){
            setJobs(fileData);
            return;
        }
        const filteredJobs = fileData.filter(job => {
            let filterItems = [job.role,job.level, ...job.languages, ...job.tools];
            return filterCtx.filters.every(item => filterItems.includes(item));
        })
        setJobs(filteredJobs);
    },[fileData, filterCtx.filters])
  return(
      <div className={classes.jobs}>
          {jobs.map(jobData => <JobOffer key={jobData.id} jobData={jobData}/> )}
      </div>

  )
}
export default JobOffers;