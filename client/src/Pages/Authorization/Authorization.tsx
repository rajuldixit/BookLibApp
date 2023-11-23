import React, {useState} from 'react'
import Login from './Login/Login';
import Register from './Register/Register';

const Authorization = () => {
  const [isLoginForm, setLoginForm] = useState(true)
  return (
    isLoginForm ? <Login setLogin={() => setLoginForm(false)} /> : <Register setLogin={() => setLoginForm(true)} />
  )
}

export default Authorization