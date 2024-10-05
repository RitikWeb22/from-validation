import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')



    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(username.length < 3){
            setUsernameError('Username must be at least 3 characters')
            setUserColor('red')
        }

        if(email.length < 3){
            setEmailError('Email id is not valid @ missing')
            setEmailColor('red')
        }

        if(password.length < 8){
            setPasswordError('Password must be at least 8 characters')
            setPasswordColor('red')
        }

        if(confirmPassword !== password){
            setConfirmPasswordError('Password must be at least 8 characters')
            setConfirmPasswordColor('red')
        }

        if(usernameError || emailError || passwordError || confirmPasswordError){
            return
        }

        console.log('Form submitted')
    }
  return (
    <div>
        <div className="card">
            <div className="card-image"></div>


            <form onSubmit={handleSubmit} className='form' >
                <div className="title">
                    <h1>Form Validation</h1>
                </div>
                <input type="text" placeholder="Username"  style={{borderColor: userColor}} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <p className='error-text'>{usernameError}</p>

                <input type="email" placeholder="Email"  style={{borderColor: emailColor}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className='error-text'>{emailError}</p>

                <input type="password" placeholder="Password"  style={{borderColor: passwordColor}} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className='error-text'>{passwordError}</p>

                <input type="password" placeholder="Confirm Password"  style={{borderColor: confirmPasswordColor}} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <p className='error-text'>{confirmPasswordError}</p>

                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Form