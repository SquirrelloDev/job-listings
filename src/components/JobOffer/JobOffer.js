import classes from "../../sass/components/JobOffer.module.scss";
import InfoChip from "./InfoChip";
import PerkChip from "./PerkChip";
import testImg from '../../images/insure.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
const JobOffer = ({jobData}) => {
    const {company, logo, new: isNew, featured: isFeatured, position, role, level, postedAt, contract, location, languages, tools} = jobData;
    let featuredClasses = isFeatured ? `${classes.offer} ${classes.featured}` : classes.offer;

  return(
      <div className={featuredClasses}>
          <div className={classes.offer__job}>
          <img src={logo} className={classes.offer__photo} alt={'Company'}/>
              <div className={classes.offer__job__details}>
                  <div className={classes.offer__company}><p>{company}</p> {isNew && <InfoChip type={'new'}/>} {isFeatured && <InfoChip type={'featured'}/>}</div>
                  <div className={classes.offer__title}><p>{position}</p></div>
                  <div className={classes.offer__info}>
                      <p>{postedAt}</p>
                      <FontAwesomeIcon icon={faCircle} className={classes.offer__info__dot}/>
                      <p>{contract}</p>
                      <FontAwesomeIcon icon={faCircle} className={classes.offer__info__dot}/>
                      <p>{location}</p>
                  </div>
              </div>
          </div>

          <hr/>
          <div className={classes.offer__chips}>
            <PerkChip>CSS</PerkChip>
              <PerkChip>React</PerkChip>
              <PerkChip>Next</PerkChip>
              <PerkChip>Sass</PerkChip>
              <PerkChip>RWD</PerkChip>
          </div>
      </div>
  )
}
export default JobOffer;