// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const onSuccessLogin = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const loginToPage = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      onSuccessLogin(response.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" className="button" onClick={loginToPage}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
