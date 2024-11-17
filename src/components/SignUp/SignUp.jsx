import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('')

   const handleSignUP = e => {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password)

       // reset error and status
       setErrorMessage('');


      
       // create user with email and password
       createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
            console.log(result.user);
       })
       .catch(error => {
        console.log('ERROR', error.message);
        setErrorMessage(error.message)

       })


   }


  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl text-center">Please Sign Up</h2>
          
          <div className="card bg-base-100 w-full mx-auto text-center max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUP} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>

            {
                errorMessage && <p>{errorMessage}</p>
            }
          </div>
        </div>
  );
};

export default SignUp;
