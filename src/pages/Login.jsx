import classes from './Login.module.css';
import React, { useReducer, useState, useEffect} from 'react';
import Button from '../components/Button/Button';



const nameDefaultState = {
    value: '',
    isValid: null,
  }

const passwordDefaultState = {
    value: '',
    isValid: null,
}
   
  const nameReducerFunction = (state, action) => {
  
    
  
    if(action.type === 'USER_INPUT'){
      return {
        value: action.value,
        isValid: action.value.includes('admin')
      }
    
    }
    return {value: '', isValid: null};
  }

  const passwordReducerFunction = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.includes('123456')
        }
    }else if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('123456')
        }
    }
    return {value:'', isValid: false};
  }

const Login = (props) => {
   
    const [formIsValid, setFormIsValid] = useState(false);
    
    const [nameReducer, dispatchName] =  useReducer(nameReducerFunction, nameDefaultState);
    const [passwordReducer, dispatchPassword] = useReducer(passwordReducerFunction, passwordDefaultState);


    useEffect( () => {
        const identifier = setTimeout( () => {
        setFormIsValid(nameReducer.isValid && passwordReducer.isValid)
      }, 1000);
    
        return () => {
          console.log('cleanup');
          clearTimeout(identifier);
        }
      }, [passwordReducer.isValid, nameReducer.isValid]);
    
    const nameChangeHandler = (event) => {
        dispatchName({type: 'USER_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    };

   
   
   

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(nameReducer.isValid, passwordReducer.isValid);
        
    }



    return (
        <div className={classes.back}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${
                    nameReducer.isValid === false ? classes.invalid : ''
                }`}>
                    <label htmlFor='admin'>Felhasználó név</label>
                    <input
                        type="text"
                        id="admin"
                        value={nameReducer.value}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className={`${classes.control} ${
                    passwordReducer.isValid === false ? classes.invalid : ''
                }`}>
                    <label htmlFor='password'>Jelszó</label>
                    <input
                        type='password'
                        id='password'
                        value={passwordReducer.value}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>Belépés</Button>
                </div>
            </form>
        </div>
    )
};

export default Login;