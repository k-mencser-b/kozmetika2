
import UjarakItem from "./UjarakItem";
import { useState, useEffect } from "react";
import classes from './Admin.module.css';
import Input from "./Input";
import Reset from "./Reset";

const Admin = () => {
    const [ujArak, setUjArak] = useState([]);
    

    

    useEffect(() => {
        const fetchUjArak = async () => {
            const response = await fetch('https://kozmetika-8d38d-default-rtdb.europe-west1.firebasedatabase.app/arak.json')
            
            if(!response.ok) {
                throw new Error('Nincs kapcsolat a szerverrel');
            }

            const responseUjArak = await response.json();
            console.log(responseUjArak);
            const ujArakHelper = [];
            for(const key in responseUjArak) {
                ujArakHelper.push({
                    id: key,
                    ...responseUjArak[key],
                    
                });
            }
            setUjArak(ujArakHelper);
            console.log(ujArakHelper);
            //console.log(ujArakHelper[4].enteredList[0].id);
        }
        
        fetchUjArak().catch((e) => console.log(e));
    }, []);

    
    const ujArakList = ujArak.map((ujArak) => (
        <UjarakItem
        key={ujArak.id}
        id={ujArak.id}
        name={ujArak.name}
        price={ujArak.price}
        />
    ));

    
    
   
      

    

    

    return(
        <>
        
        <div className={classes.inputcard}>
            <div className={classes.tabla}> 
                <h1>Admin</h1>
                <table>
                    <td>{ujArakList}</td>
                </table>
            </div>
            <Input/>
            <Reset/>
        </div>
        </>
    )
};

export default Admin;