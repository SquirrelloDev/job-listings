import classes from "../../sass/components/Chips.module.scss";

const InfoChip = ({type}) => {
    let styles;
    if(type === 'new'){
        styles = `${classes['info-chip']} ${classes['info-chip--new']}`;
    }
    else {
        styles = `${classes['info-chip']} ${classes['info-chip--featured']}`;
    }
  return(
      <div className={styles}>
          <p>{type === 'new' ? 'NEW!' : 'FEATURED'}</p>
      </div>
  )
}
export default InfoChip;