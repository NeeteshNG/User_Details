import React from 'react'

function LoginPage() {
  return (
    <div className='login-container'>
        <div class="signin"> 

            <div class="content"> 

                <h2>Sign In</h2> 

                <div class="form"> 

                    <div class="inputBox"> 

                    <input type="text" required/> <i>Username</i> 

                    </div> 

                    <div class="inputBox"> 

                        <input type="password" required/> <i>Password</i> 

                    </div> 

                    <div class="inputBox"> 

                        <input type="submit" value="Login"/> 

                    </div> 

                </div> 

            </div> 

    </div> 
    </div>

  )
}

export default LoginPage
