import classes from './Input.module.css';
import { useRef } from 'react';
import Button from '../components/Button/Button';

const Input = (props) => {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const idInputRef = useRef();

    const addNewData = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredId = idInputRef.current.value;
        
        nameInputRef.current.value='';
        priceInputRef.current.value='';

        

        console.log(enteredName);
        console.log(enteredPrice);
        console.log(enteredId);

        //const enteredList = [];

       // enteredList.push({
       //     id: enteredId,
       //     name: enteredName,
        //    price: enteredPrice
       // })

        

        const submitHandler = async() => {
            try {
                const response = fetch('https://kozmetika-8d38d-default-rtdb.europe-west1.firebasedatabase.app/arak.json', {
                    method: 'POST',
                    body: JSON.stringify({
                    id: enteredId,
                    name: enteredName,
                    price: enteredPrice
                })
            });
            if(!response.ok){
                throw new Error ('Szerver hiba! :(  .');
            }
        }catch (e) {
            console.log(e);
        }
        }

        submitHandler(enteredId, enteredName, enteredPrice);



      
    }

    

    
    return (
        
        <form onSubmit={addNewData} className={classes.inputs}>
            <div className={classes.input}>
              <label>Sorszám:</label>
              <input
              type='number'
              id='id'
              ref={idInputRef}
              />
            </div>
            <div className={classes.input}>
              <label>Kezelés:</label>
              <input
               type="text"
               id="text" 
               ref={nameInputRef}
               />
            </div>
            <div className={classes.input}>
              <label>Uj Ár:</label>
              <input
               type="number"
               id="number"
               placeholder="csak szám..."
               ref={priceInputRef}
               />
            </div>
            <div className={classes.input} >
            <Button type="submit">Hozzáad</Button>
            </div>
        </form>
        
    )
};

export default Input;