import classes from "../../sass/components/JobOffer.module.scss";
import InfoChip from "./InfoChip";

const JobOffer = ({imageSrc}) => {
  return(
      <div className={classes.offer}>
          <img src={imageSrc} alt={'Company'}/>
          <div className={classes.offer__company}><p>Photosnap</p> <InfoChip type={'new'}/></div>
          <div className={classes.offer__title}><p>Senior Developer</p></div>
          <div className={classes.offer__info}>
            <p>1d ago</p>
              <p>Full time</p>
              <p>USA only</p>
          </div>
          <hr/>
          <div className={classes.offer__chips}>

          </div>
      </div>
  )
}
export default JobOffer;