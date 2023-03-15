import classes from "../../sass/components/JobOffer.module.scss";
import InfoChip from "./InfoChip";
import PerkChip from "./PerkChip";
import testImg from '../../images/insure.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
const JobOffer = ({imageSrc}) => {
  return(
      <div className={`${classes.offer} ${classes.featured}`}>
          <div className={classes.offer__job}>
          <img src={testImg} className={classes.offer__photo} alt={'Company'}/>
              <div className={classes.offer__job__details}>
                  <div className={classes.offer__company}><p>Photosnap</p> <InfoChip type={'new'}/><InfoChip type={'featured'}/></div>
                  <div className={classes.offer__title}><p>Senior Developer</p></div>
                  <div className={classes.offer__info}>
                      <p>1d ago</p>
                      <FontAwesomeIcon icon={faCircle} className={classes.offer__info__dot}/>
                      <p>Full time</p>
                      <FontAwesomeIcon icon={faCircle} className={classes.offer__info__dot}/>
                      <p>USA only</p>
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