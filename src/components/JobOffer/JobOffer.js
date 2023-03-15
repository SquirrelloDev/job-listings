import classes from "../../sass/components/JobOffer.module.scss";
import InfoChip from "./InfoChip";
import PerkChip from "./PerkChip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
const JobOffer = ({jobData}) => {
    const [perks, setPerks] = useState([]);
    const {company, logo, new: isNew, featured: isFeatured, position, role, level, postedAt, contract, location, languages, tools} = jobData;
    let featuredClasses = isFeatured ? `${classes.offer} ${classes.featured}` : classes.offer;
    useEffect(() =>{
        setPerks([...languages, ...tools]);
    }, [languages,tools])
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
            <PerkChip>{role}</PerkChip>
              <PerkChip>{level}</PerkChip>
              {perks.map(perk => <PerkChip key={perk}>{perk}</PerkChip>)}
          </div>
      </div>
  )
}
export default JobOffer;