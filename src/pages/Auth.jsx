import { useContext, useState } from 'react'
import {useForm} from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'

export default function Auth() {

  const [mode,setMode] = useState("signup");
  const [error, setError] = useState(null);
  const {signUp, login} = useContext(AuthContext)
  
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()

  function onSubmit(data){
    setError(null);

    let result;
    if(mode === "signup"){
      result = signUp(data.email, data.password);
    }else{
      result = login(data.email, data.password)
    }

    if(result.success){
      navigate("/");
    }else{
      setError(result.error);
    }

  }

  return (
    <div>
      <div>
        <div>

          <h1>{mode === "signup" ? "Sign up" : "Login"}</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {error && <div>{error}</div>}
            <div>
              <label htmlFor='email' >Email</label>
              <input type="email" id='email' {...register("email",{required:"Email is required"})} />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <input 
                type="password"  
                id='password' 

                {...register
                  ("password",
                    {
                      required:"password is required", minLength:{value:6, message:"password must be at least 6 characters"},  maxLength:{value:12, message:"password must be less than 12 characters"}
                    }
                  )
                }            
                   
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button type='submit'>{mode === "signup" ? "Sign up" : "Login"}</button>

          </form>

          <div>
            {mode === "signup" ? (
              <p>
                Already have an account? {""} 
                <span className='auth-link' onClick={() => setMode("login") } >Login</span>
              </p>
            ):(
              <p>
                Don't have an account? {""} 
                <span className='auth-link' onClick={() => setMode("signup")} >Sign up</span>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
