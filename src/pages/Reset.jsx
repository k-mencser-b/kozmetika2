import Button from "../components/Button/Button";
import classes from "./Reset.module.css"

const Reset = () => {

     const resetHandler = async() => {
            try {
                const response = fetch('https://kozmetika-8d38d-default-rtdb.europe-west1.firebasedatabase.app/arak.json', {
                    method: 'DELETE'
                });
                if(!response.ok) {
                    throw new Error ('Szerver hiba!');
                }
            }catch (e) {
                console.log(e);
            }
        }

        

    return (
        <>
        <div className={classes.torles}>
        <Button type="reset" onClick={resetHandler}>Törlés</Button>
        </div>
        </>
    )
};

export default Reset;