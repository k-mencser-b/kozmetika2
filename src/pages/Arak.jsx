import { useEffect, useState } from 'react';
import classes from './Arak.module.css';
import ArakItem from './ArakItem';





const Arak = (props) => {
    const [arak, setArak] = useState([]);

    useEffect(() => {
        const fetchArak = async () => {
            const response = await fetch('https://kozmetika-8d38d-default-rtdb.europe-west1.firebasedatabase.app/arak.json')
            
            if(!response.ok) {
                throw new Error('Nincs kapcsolat a szerverrel');
            }

            const responseArak = await response.json();
            console.log(responseArak);
            const arakHelper = [];
            for(const key in responseArak) {
                arakHelper.push({
                    id: key,
                    ...responseArak[key]
                });
            }
            setArak(arakHelper);
            console.log(arakHelper);
        }
        
        fetchArak().catch((e) => console.log(e));
    }, [])

   

    const arakList = arak.map((arak) => (
        <ArakItem
        key={arak.id}
        id={arak.id}
        name={arak.name}
        price={arak.price}
        />
    ));

    

    return (
        <div className={classes.arak}>
            <div className={classes.card}>
            <h1>Árak:</h1>
            <div className={classes.tabledoboz}>
            <table>
                <tr>
                    <td>{arakList}</td>
                    
                </tr>
                
            </table>
            
            </div>
            </div>
        </div>
    );
};

export default Arak;