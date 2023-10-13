import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function LoginPage( {data, setLoggedIn} ) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const user = data.find(
            (user) => user.username === username && user.password === password
        );

        if (user){
            setLoggedIn(true);
            navigate(`/directory`);
            // navigate(`/userdetails/${user.id}`, {state : user});
        }
        else{
            setError('Invalid Username or Password.');
        }
    }

    
    return (
        <div className='login-container'>
            <div className="signin"> 

                <div className="content"> 

                    <h2>Log In</h2> 

                    <div className="form"> 

                        <div className="inputBox"> 

                        <input 
                            type="text" 
                            value={username} 
                            name='username'
                            onChange={(e) => setUsername(e.target.value)}
                            required/> <i>Username</i> 
                        </div> 

                        <div className="inputBox"> 

                            <input 
                                type="password" 
                                value={password} 
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                required/> <i>Password</i> 

                        </div> 

                        {error && <p className='login-error' >{error}</p>}

                        <div className="inputBox" onClick={handleLogin}> 

                            <input type="submit" value="Login"/> 

                        </div> 

                    </div> 

                </div> 

        </div> 
        </div>

    )
}

export default LoginPage
