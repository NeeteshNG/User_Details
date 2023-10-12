import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function LoginPage( {data} ) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const user = data.find(
            (user) => user.username == username && user.password == password
        );

        if (user){
            navigate('/directory');
        }
        else{
            setError('Invalid Username or Password.');
        }
    }

    
    return (
        <div className='login-container'>
            <div class="signin"> 

                <div class="content"> 

                    <h2>Log In</h2> 

                    <div class="form"> 

                        <div class="inputBox"> 

                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            required/> <i>Username</i> 
                        </div> 

                        <div class="inputBox"> 

                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required/> <i>Password</i> 

                        </div> 

                        {error && <p>{error}</p>}

                        <div class="inputBox" onClick={handleLogin}> 

                            <input type="submit" value="Login"/> 

                        </div> 

                    </div> 

                </div> 

        </div> 
        </div>

    )
}

export default LoginPage
