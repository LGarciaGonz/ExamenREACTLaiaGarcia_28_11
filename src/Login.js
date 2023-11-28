
import { useState } from "react";
import { useReducer } from 'react';

function Login() {
    
const [ username, setUsername ] = useState('')

function handleUsername(e){
    setUsername(e.target.value);

}

const formReducer = (state, action) => {

  if(action.type === 'signIn'){

    return {
      ...state,
      enteredEmail: state.enteredEmail.value,
      emailIsValid: state.enteredEmail.value === 'admin',
      enteredPassword: state.enteredPassword.value,
      passwordIsValid: state.enteredPassword.value === 'admin',

    }

  }


  if(action.type === 'singUp'){
    return {
      ...state,
      enteredEmail: state.enteredEmail.value,
      emailIsValid: state.enteredEmail.value.trim().length > 5,
      enteredPassword: state.enteredPassword.value,
      passwordIsValid: state.enteredPassword.value.trim().length > 7,
    }
  }

  if(action.type === 'singOut'){
    return {
      ...state,
      enteredEmail: state.enteredEmail.value,
      emailIsValid: state.enteredEmail.value === 'admin',
      enteredPassword: state.enteredPassword.value,
      passwordIsValid: state.enteredPassword.value === 'admin',

    }
  }
  return state
}


// Inicializando el estado y la función de despacho utilizando formReducer
const [formState, dispatchForm] = useReducer(formReducer, {
  enteredEmail: '',
  emailIsValid: false,
  enteredPassword: '',
  passwordIsValid: false,
});


const signInHandler = (event) => {
  //const value = event.target.value
  dispatchForm({ type: 'signIn'})
  if (formState.emailIsValid && formState.passwordIsValid) {
    console.log("Sign In correcto!")
  }
}


const signOutHandler = (event) => {
  const value = event.target.value
  dispatchForm({ type: 'signOut'})
  if (formState.emailIsValid && formState.passwordIsValid) {
    console.log("Sign Out correcto!")
  }
}


const signUpHandler = (event) => {
  const value = event.target.value
  dispatchForm({ type: 'signUp'})
  if (formState.emailIsValid && formState.passwordIsValid) {
    console.log("Sign Up correcto!")
  }
}


  return (
    <div className="login">
    <form onSubmit={signInHandler}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Sign In" disabled={username.length === 0} />
    </form>
    <div className="button-div" onClick={signUpHandler}><button>Sign Up</button></div>
    <div className="button-div" onClick={signOutHandler}><button>Sign Out</button></div>
    
    </div>
  )
}

export default Login