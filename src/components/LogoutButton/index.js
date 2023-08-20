// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const removeTheToken = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={removeTheToken}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
