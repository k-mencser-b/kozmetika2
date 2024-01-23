import classes from './ArakItem.module.css';

const ArakItem = (props) => {


    return (
        <>
        <li className={classes.lista}>
            <div className={classes.listasor}>
                <div className={classes.name}>
                    <p>{props.id}.</p>
                    <p className={classes.name2}>{props.name}:</p>
                </div>
                <div className={classes.price}>
                    <p >{props.price}  Ft</p>
                </div>
               
            </div>
        </li>
        </>
    )
};

export default ArakItem;