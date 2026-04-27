import { useState } from 'react'
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import styles from "./Auth.module.css"

export default function Auth() {

  // Controls whether the form is in signup or login mode
  const [mode,setMode] = useState("signup");

  // Stores authentication errors returned from signup or login
  const [error, setError] = useState(null);

  const {signUp, login} = useAuth();
  const navigate = useNavigate()

  // Registers form fields and handles validation errors
  const {register, handleSubmit, formState: {errors}} = useForm()

  // Handles signup or login based on the current form mode
  function onSubmit(data){
    setError(null);

    let result;
    if(mode === "signup"){
      result = signUp(data.email, data.password);
    }else{
      result = login(data.email, data.password)
    }

    // Redirects successful users to the home page, otherwise displays an error
    if(result.success){
      navigate("/");
    }else{
      setError(result.error);
    }

  }

  return (
    <main className={styles.authMainContainer}>
      
      <section className={styles.authContantContainer}>

        <h1>{mode === "signup" ? "Sign up" : "Login"}</h1>

        {/* Auth form with email and password validation */}
        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
          {error && <div className={styles.error}>{error}</div>}
          <div>
            <label htmlFor='email' >Email</label> <br /> 
            <input type="email" id='email' {...register("email",{required:"Email is required"})} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>
          <br />
          <div>
            <label htmlFor='password'>Password</label> <br />
            <input 
              type="password"  
              id='password' 

              {...register
                ("password",
                  {
                    required:"Password is required", minLength:{value:6, message:"Password must be at least 6 characters"},  maxLength:{value:12, message:"Password must be less than 12 characters"}
                  }
                )
              }            
                  
            />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </div>
          <br />
          <button className={styles.authButton} type='submit'>{mode === "signup" ? "Sign up" : "Login"}</button>

        </form>

        {/* Allows the user to switch between signup and login mode */}
        <div>
          {mode === "signup" ? (
            <p>
              Already have an account? {""} 
              <button className={styles.authLinkButton} onClick={() => setMode("login") } >Login</button>
            </p>
          ):(
            <p>
              Don't have an account? {""} 
              <button className={styles.authLinkButton}  onClick={() => setMode("signup")} >Sign up</button>
            </p>
          )}
        </div>

      </section>
      
    </main>
  )
}
