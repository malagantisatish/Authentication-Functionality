// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list-elements">
      <Link to="/">
        <li className="item">Home</li>
      </Link>
      <Link to="/about">
        <li className="item">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
